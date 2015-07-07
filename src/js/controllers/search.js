'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Search', [])
      .controller('SearchController', SearchController);

    function SearchController(Post, $stateParams, $state) {
      var vm = this;

      vm.submit = submit;

      function submit(term) {
        $state.go('home.results');

        Post.searchAll(term)
          .then(function (result) {
            vm.results = result.posts;
            vm.term = term;
            console.log(vm.results);
          });
      }

    }

  }
);

