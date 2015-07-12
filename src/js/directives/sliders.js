
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

    function homeSlider () {
      console.log('here');
      return {
        restrict: 'E',
        templateUrl: 'partials/sliders/_slider-home.html',
        link: function () {
          $('.js-home-slider').slick({
            dots: true,
            arrows: false,
            autoplay: true
          });
        }
      }
    }

  }
);

