
'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Blog', [])
      .controller('BlogController', BlogController);

    function BlogController($location, Post) {
      var vm = this;

      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = parseInt($location.search().limit || 1, 10);
      vm.updateLimit = updateLimit;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      updatePosts();

      function nextPage() {
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        vm.page--;

        updatePosts();
      }

      function updateLimit() {
        vm.perPage = 2;
        vm.page = 1;

        updatePosts();
      }

      function updatePosts() {
        Post.getAll(vm.page, vm.perPage)
          .then(function(result) {
            vm.posts = result;
            $location.search({
              page: vm.page,
              limit: vm.perPage
            });
          });
      }
    }

  }
);

