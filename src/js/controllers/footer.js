'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqController.Footer', [])
      .controller('FooterController', FooterController);

    function FooterController($scope, $state, $rootScope, $location, ProductCategory, Pages, Forms) {
      var vm = this;

      vm.categories = [];
      vm.getPages = getPages;
      vm.goToPage = goToPage;

      updateCategories();
      getPages();

      function updateCategories () {
        ProductCategory.getParent()
          .then(function (result) {
            vm.categories = result[0].parentCategories;
          })
      }

      function getPages() {
        Pages.getAll()
          .then(function (result) {
            vm.pages = result;
          })
      }

      function goToPage(pageName, pageID) {
        $state.go('home.page', { pageName: pageName, ID: pageID } );
      }
    }

  }
);

