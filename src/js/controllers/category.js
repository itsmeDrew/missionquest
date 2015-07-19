'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Category', [])
      .controller('CategoryController', CategoryController);

    function CategoryController($location, $scope, Products, $stateParams) {
      var vm = this;

      vm.totalProducts = 0;
      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = 10;
      vm.catID = $stateParams.catID;
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      updatePosts();

      function updatePosts() {
        vm.loaded = false;

        vm.count = 0;

        Products.getByCategory(vm.catSlug, vm.page, vm.perPage)
          .then(function(result) {
            vm.products = result.posts;
            vm.totalProducts = result.totalPosts;
            vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
            vm.loaded = !vm.loaded;
          })

        $location.search({
          page: vm.page,
          slug: vm.catSlug
        });

      }


      function nextPage() {
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        vm.page--;

        updatePosts();
      }

    }

  }
);

