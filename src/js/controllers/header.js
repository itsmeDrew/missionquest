'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Header', [])
      .controller('HeaderController', HeaderController);

    function HeaderController(Post, $stateParams, $state) {
      var vm = this;

      vm.submit = submit;

      function submit(term) {
        $state.go('home.results', { terms: term } );
      }

    }

  }
);

