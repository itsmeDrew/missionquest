'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Nav', [])
      .directive('navDesktop', navDesktop)
      .directive('navMobile', navMobile);

    function navDesktop () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_nav-desktop.html'
      }
    }

    function navMobile () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_nav-mobile.html'
      }
    }

  }
);

