'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Nav', [])
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

