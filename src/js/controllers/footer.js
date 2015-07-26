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

      function submitForm() {
        var _inputValues = {
          input_1: $('#input_1').val()
        }
        var data = {
          input_values: _inputValues
        };
        console.log('submitting', data);
        Forms.submitForm(data, '1');
      }

      function getForms() {
        Forms.getForms();
      }

    }

  }
);

