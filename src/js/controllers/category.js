'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Category', [])
      .controller('CategoryController', CategoryController);

    function CategoryController($location, $state, Products, ProductCategory, $stateParams) {
      var vm = this;

      vm.totalProducts = 0;
      vm.page = parseInt($location.search().page || 0, 10);
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.facet = true;
      vm.setFacet = setFacet;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.facet = $location.search().facet;
      vm.loaded = false;
      vm.totalProducts = 0;

      updatePosts();

      function updatePosts() {
        vm.loaded = false;
        vm.totalProducts = 0;

        if (vm.facet) {
          console.log(vm.facet)
          Products.getByFacet(vm.catSlug, vm.page, vm.facet)
            .then(function(result) {
              vm.products = result;
              vm.totalProducts = result.length;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              vm.facet = $stateParams.facet;
              console.log(result);
            })
        } else {
          Products.getByCategory(vm.catSlug, vm.page)
            .then(function(result) {
              vm.products = result.posts;
              vm.totalProducts = result.totalPosts;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              vm.name = $stateParams.catSlug;
            })
            $location.search('facet', vm.facet);
        }
      }

      function nextPage() {
        vm.page++;
      }

      function prevPage() {
        vm.page--;
      }

      function updatePostsPerPage() {
        vm.page = 0;
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

