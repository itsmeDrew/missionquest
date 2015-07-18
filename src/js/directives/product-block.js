
'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.ProductBlock', [])
      .directive('productBlock', productBlock);

    function productBlock () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_product-block.html'
      }
    }

  }
);

