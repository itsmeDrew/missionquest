'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Nav', [])
      .directive('navMain', getNav)
      .directive('navMobile', navMobile);

    function getNav () {
      return {
        restrict: 'E',
        templateUrl: 'partials/_nav.html'
      }
    }

    function navMobile() {
      return {
        restrict: 'E',
        templateUrl: 'partials/_header-mobile.html',
        link: function(scope, element) {
          scope.toggleMenu = function() {
            console.log(scope, element);
            scope.$emit('menu.toggle');
          }
        }
      }


    }



  }

);

