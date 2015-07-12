
'use strict';

define(
  [
    'angular',
    'jquery',
    'slick'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Sliders', [])
      .directive('homeSlider', homeSlider);

    function homeSlider ($timeout) {
      return {
        restrict: 'E',
        templateUrl: 'partials/sliders/_slider-home.html',
        link: function() {

          $timeout(function() {
            // wait for data to load - fixes ng repeat problem
            $('.js-home-slider').slick({
              dots: true,
              arrows: true,
              autoplay: true
            });
          }, 1000)

        }
      }
    }

  }
);

