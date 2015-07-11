'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Header', [])
      .controller('HeaderController', HeaderController);

    function HeaderController(Post, $scope, $rootScope, $stateParams, $state) {
      var vm = this;

      vm.submit = submit;
      vm.toggleMenu = toggleMenu;
      vm.toggleSearch = toggleSearch

      function submit(term) {
        vm.searchOpen = !vm.searchOpen;
        $state.go('home.results', { terms: term } );
      }

      function toggleMenu() {
        //only toggle the menu if you are in the mobile menu
        if ($rootScope.$mobile) {
          $scope.$emit('menu.toggle');
        }
      }

      function toggleSearch() {
        $scope.$emit('search.toggle');
      }

    }

  }
);

