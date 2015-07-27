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

      function submitForm(inputValue) {
        var _inputValues = {
          input_1: inputValue
        }
        var data = {
          input_values: _inputValues
        };

        console.log('banjo!', inputValue);
        Forms.submitForm(data, '1');
      }

      function getForms() {
        Forms.getForms();
      }

    }

  }
);

