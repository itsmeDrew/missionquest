'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Search', [])
      .controller('SearchController', SearchController);

    function SearchController(Post, $location, $stateParams, $state) {
      var vm = this;
      vm.term = $location.$$search.terms;

      console.log('location', $location, 'stateParams', $stateParams)
      Post.searchAll(vm.term)
          .then(function (result) {
            vm.results = result.posts;
            vm.totalResults = vm.results.length;
            console.log(vm.results.length, vm.results)
          });
    }

  }
);
