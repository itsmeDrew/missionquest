'use strict';

define(
  [
    'angular',
    'directives/nav'
  ],
  function(angular) {
    angular
      .module('App.MqController.Nav', ['App.MqDirective.Nav'])
      .controller('NavController', NavController);

    function NavController($scope, $location, Category) {
      var vm = this;

      vm.categories = [];
      vm.getChildren = getChildren;
      vm.toggleMenu = function() {
        $scope.$emit('menu.toggle');
      };

      updateCategories();

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

