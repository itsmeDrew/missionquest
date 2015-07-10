'use strict';

define(
  [
    'angular',
    '../directives/nav'
  ],
  function(angular) {
    angular
      .module('App.MqController.Nav', ['App.MqDirective.Nav'])
      .controller('NavController', NavController);

    function NavController($location, Category) {
      var vm = this;

      vm.getChildren = getChildren;

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

