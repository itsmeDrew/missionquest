
'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Form.Quote.Email', [])
      .directive('formQuoteEmail', formQuoteEmail);

    function formQuoteEmail (Forms) {
      return {
        restrict: 'E',
        templateUrl: 'partials/forms/_form-quote-email.html',
        controller: function() {
          var vm = this;

          vm.submitForm = submitForm;
          vm.newsletterSubmitted = false;

          function submitForm(formID) {
            if (vm.newsletter.$invalid) return;

            Forms.submitForm({
              input_values: {
                input_1: vm.email
              }
            }, formID).success(function(data) {
              if (data.response.is_valid) {
                vm.newsletterSubmitted = true;
              }
            });
          }

        },
        controllerAs: 'form'
      }

    }
  }
);

