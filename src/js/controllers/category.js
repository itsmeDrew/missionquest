'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Category', [])
      .controller('CategoryController', CategoryController);

    function CategoryController($location, Post, $stateParams) {
      var vm = this;

      vm.totalPosts = 0;
      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = parseInt($location.search().limit || 1, 10);
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      updatePosts();

      function updatePosts() {
        Post.getByCategory($stateParams.catId, vm.page, vm.perPage)
          .then(function(result) {
            vm.posts = result.posts;
            vm.totalPosts = result.totalPosts;
            $location.search({
              page: vm.page,
              limit: vm.perPage
            });
          })
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
