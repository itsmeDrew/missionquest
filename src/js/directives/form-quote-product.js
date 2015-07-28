
'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Form.Quote.Product', [])
      .directive('formQuoteProduct', formQuoteProduct);

    function formQuoteProduct (Forms) {
      return {
        restrict: 'E',
        templateUrl: 'partials/forms/_form-quote-product.html',
        controller: function() {
          var vm = this;

          vm.submitForm = submitForm;
          vm.newsletterSubmitted = false;

          getForms();

          function submitForm(formID, interestedProduct) {
            if (vm.newsletter.$invalid) return;

            Forms.submitForm({
              input_values: {
                input_1: vm.email,
                input_2: interestedProduct
              }
            }, formID).success(function(data) {
              if (data.response.is_valid) {
                vm.newsletterSubmitted = true;
              }
            });
          }

          function getForms() {
            Forms.getForms();
          }

        },
        controllerAs: 'productForm'
      }

    }
  }
);

