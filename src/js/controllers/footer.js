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
      vm.submitForm = submitForm;
      vm.newsletterSubmitted = false;

      updateCategories();
      getPages();
      getForms();

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

      function submitForm() {
        if (vm.newsletter.$invalid) return;

        Forms.submitForm({
          input_values: {
            input_1: vm.email
          }
        }, '1').success(function(data) {
          if (data.response.is_valid) {
            vm.newsletterSubmitted = true;
          }
        });
      }

      function getForms() {
        Forms.getForms();
      }
    }

  }
);

