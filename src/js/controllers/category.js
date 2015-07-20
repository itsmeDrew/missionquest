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
      vm.perPage = 2;
      vm.catID = $stateParams.catID;
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.getCategories = getCategories;
      vm.setGender = setGender;

      updatePosts();

      function updatePosts() {
        vm.loaded = false;
        vm.count = 0;
        vm.facet = $stateParams.facet;

        if (vm.facet) {
          if ($state.gender) {
            Products.getByGender(vm.catSlug, vm.page, vm.facet)
            .then(function(result) {
              vm.products = result;
              vm.totalProducts = result.length;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
            })
          }
        } else {
          Products.getByCategory(vm.catSlug, vm.page)
            .then(function(result) {
              vm.products = result.posts;
              vm.totalProducts = result.totalPosts;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.loaded = !vm.loaded;
              console.log('vm.totalPages:', vm.totalPages);
            })
        }
        // setLocation();
      }

      function setLocation() {
        $location.search({
          slug: vm.catSlug,
          page: vm.page
        });
      }

      function nextPage() {
        vm.page++;
        // setLocation();
      }

      function prevPage() {
        vm.page--;
        // setLocation();
      }

      function getCategories() {
        ProductCategory.getParent()
          .then(function (result) {
            vm.categories = result
          })
      }

      function setGender(gender) {
        $state.gender = true;
        if (gender !== $stateParams.facet) { //if you're not clicking same gender
          $state.go('home.category.facet', { facet: gender } );
        }
      }
    }
  }

);

