'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Category', [])
      .controller('CategoryController', CategoryController);

    function CategoryController($location, $state, $rootScope, Products, ProductCategory, $stateParams) {
      var vm = this;

      vm.totalProducts = 0;
      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = 10;
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.facet = true;
      vm.setFacet = setFacet;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.updateOrderBy = updateOrderBy;
      vm.updateOrder = updateOrder;
      vm.facet = $location.search().facet;
      vm.loaded = false;
      vm.totalProducts = 0;
      vm.orderBy = '';
      vm.order = '';

      updatePosts();

      function updatePosts() {
        vm.loaded = false;
        vm.totalProducts = 0;

        if (vm.facet) {
          Products.getByFacet(vm.catSlug, vm.page, vm.facet)
            .then(function(result) {
              vm.products = result;
              vm.totalProducts = result.length;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              vm.facet = $stateParams.facet;

            });
        } else {
          Products.getByCategory(vm.catSlug, vm.page, vm.orderBy, vm.order, vm.perPage)
            .then(function(result) {
              vm.products = result.posts;
              vm.totalProducts = result.totalPosts;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              vm.name = $stateParams.catSlug;
            });
            $location.search('facet', vm.facet);
        }
      }

      function nextPage() {
        vm.loaded = false;
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        vm.loaded = false;
        vm.page--;

        updatePosts();
      }

      function updatePostsPerPage(perPage) {
        vm.loaded = false;
        vm.page = 1;
        vm.perPage = perPage;

        updatePosts();
      }

      function updateOrderBy(orderBy) {
        vm.loaded = false;
        vm.page = 1;
        vm.orderBy = orderBy;

        if (orderBy === 'name') {
          vm.order = 'ASC'
        }

        updatePosts();
      }

      function updateOrder() {
        vm.loaded = false;
        vm.page = 1;

        if (vm.order === 'DESC' || vm.order === '') {
          vm.order = 'ASC';
        } else {
          vm.order = 'DESC'
        }

        updatePosts();
      }

      function setFacet(newFacet) {
        if (newFacet !== $stateParams.facet) {
          vm.facet = newFacet;
          updatePosts();
        }
      }

    }
  }
);

