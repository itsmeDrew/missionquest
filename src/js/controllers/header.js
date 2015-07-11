'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Header', [])
      .controller('HeaderController', HeaderController);

    function HeaderController(Post, $rootScope, $stateParams, $state) {
      var vm = this;

      vm.toggleMenu = toggleMenu;
      vm.submit = submit;

      function submit(term) {
        $state.go('home.results', { terms: term } );
      }

      function toggleMenu() {
        //only toggle the menu if you are in the mobile menu
        if ($rootScope.$mobile) {
          $scope.$emit('menu.toggle');
        }
      }

    }

  }
);

