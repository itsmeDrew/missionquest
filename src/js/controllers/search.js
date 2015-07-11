'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Search', [])
      .controller('SearchController', SearchController);

    function SearchController(Post, $scope, $location, $stateParams, $state) {
      var vm = this;
      vm.loaded = false;
      vm.term = $location.$$search.terms;

      Post.searchAll(vm.term)
          .then(function (result) {
            vm.results = result.posts;
            vm.totalResults = vm.results.length;
            vm.loaded = true;


            $scope.$emit('search.toggle');
            $scope.$emit('menu.toggle');

          });
    }

  }
);

