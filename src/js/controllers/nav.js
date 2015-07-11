'use strict';

define(
  [
    'angular',
    'jquery',
    'directives/nav'
  ],
  function(angular) {
    angular
      .module('App.MqController.Nav', ['App.MqDirective.Nav'])
      .controller('NavController', NavController);

    function NavController($scope, $rootScope, $location, Category) {
      var vm = this;
      var mobileMenuActive = $('body').hasClass('mobile-menu--active');

      vm.categories = [];
      vm.getChildren = getChildren;
      vm.toggleMenu = toggleMenu;

      updateCategories();

      function toggleMenu() {
        //only toggle the menu if you are in the mobile menu
        mobileMenuActive ? $scope.$emit('menu.toggle') : mobileMenuActive = false;
      }

      function updateCategories () {
        Category.getAll()
          .then(function (result) {
            vm.categories = result;
          })
      }

      function getChildren(catID) {
        //will get children of the li
      }

    }

  }
);

