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

      console.log($scope);

      vm.searchOpen = $scope.$parent.mq.searchOpen;
      vm.menuOpen = $scope.$parent.mq.menuOpen;
      vm.loaded = false;
      vm.term = $location.$$search.terms;

      if (vm.menuOpen) {
        $scope.$emit('menu.toggle');
      } else if (vm.searchOpen) {
        $scope.$emit('search.toggle');
      }

      Post.searchAll(vm.term)
          .then(function (result) {
            vm.results = result.posts;
            vm.totalResults = vm.results.length;
            vm.loaded = true;
          });
    }

  }
);

