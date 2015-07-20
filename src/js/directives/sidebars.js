
'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Sidebars', [])
      .directive('categorySidebar', categorySidebar);

    function categorySidebar () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_sidebar-category.html'
      }
    }

  }
);

