
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

    var breakpointSmall = 480;
    var breakpointMedium = 600;
    var breakpointLarge = 1024;

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
              autoplay: false,
              responsive: [
                {
                  breakpoint: breakpointSmall,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });
          }, 1000)

        }
      }
    }

  }
);

