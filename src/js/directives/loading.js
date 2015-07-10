
'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Loading', [])
      .directive('loading', loading);

    function loading () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_loading.html'
      }
    }

  }
);

