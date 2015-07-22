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
      vm.facet = parseInt($location.search().facet || 1, 10);
      vm.catID = $stateParams.catID;
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.getCategories = getCategories;
      vm.setFacet = setFacet;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.perPage = 10;
      vm.perPageOptions = [{'id': 2, 'value': 2}, {'id': 5, 'value': 5}, {'id': 10, 'value': 10}];

      updatePosts();

      function updatePosts() {
        vm.loaded = false;
        vm.count = 0;
        vm.facet = $stateParams.facet;

        if (vm.facet) {
          Products.getByFacet(vm.catSlug, vm.page, vm.facet)
            .then(function(result) {
              vm.products = result;
              vm.totalProducts = result.length;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              vm.facet = $stateParams.facet;
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
        }
      }

      function nextPage() {
        vm.page++;
      }

      function prevPage() {
        vm.page--;
      }

      function getCategories() {
        ProductCategory.getParent()
          .then(function (result) {
            vm.categories = result
          })
      }

      function updatePostsPerPage() {
        vm.page = 0;
        updatePosts();
      }

      function setFacet(newFacet) {
        if (newFacet === 'Male' || newFacet === 'Female' ) {
          $state.gender = true;
        } else {
          $state.madeInUsa = true;
        }
        if (newFacet !== $stateParams.facet) { //if you're not clicking same gender
          $state.go('home.category.facet', { facet: newFacet } );
        }
      }
    }
  }

);

