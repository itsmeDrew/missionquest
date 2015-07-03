'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Home', [])
      .directive('mqHome', function (){
        return {
          restrict: 'E',
          templateUrl: '../src/partials/header.html'
        };
      });
  }
);
