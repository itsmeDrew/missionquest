'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Search', [])
      .controller('SearchController', SearchController);

    function SearchController(Post, $scope, $rootScope, $location, $stateParams, $state) {
      var vm = this;
      var $bodyEl = $('body');

      vm.searchOpen = $scope.$parent.mq.searchOpen;
      vm.menuOpen = $scope.$parent.mq.menuOpen;
      vm.page = parseInt($location.search().page || 0, 10);
      vm.term = $location.$$search.terms;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      if (vm.menuOpen) {
        $scope.$emit('menu.toggle');
      } else if (vm.searchOpen) {
        $scope.$emit('search.toggle');
      }

      updatePosts();

      function updatePosts() {
        vm.loaded = false;

        Post.searchAll(vm.term)
          .then(function (result) {
            vm.results = result.posts;
            vm.totalResults = vm.results.length;
            vm.loaded = true;
            vm.totalPages = Math.ceil(vm.totalResults / vm.perPage);
          });
      }

      function updatePostsPerPage() {
        vm.page = 0;
        updatePosts();
      }

      function nextPage() {
        vm.page++;
      }

      function prevPage() {
        vm.page--;
      }

    }

  }
);

