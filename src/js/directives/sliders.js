
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
      .directive('homeSlider', homeSlider)
      .directive('productSlider', productSlider);

    var breakpointSmall = 480;
    var breakpointMedium = 600;
    var breakpointLarge = 1024;

    function homeSlider ($timeout) {
      return {
        restrict: 'E',
        templateUrl: 'partials/sliders/_slider-home.html',
        link: function() {
          console.log('im at least here')
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

    function productSlider($timeout) {
      return {
        restrict: 'E',
        templateUrl: 'partials/sliders/_slider-products.html',
        link: function() {

          $timeout(function() {
            // wait for data to load - fixes ng repeat problem
            $('.js-product-slider--display').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              asNavFor: '.js-product-slider--nav'
            });
            $('.js-product-slider--nav').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              asNavFor: '.js-product-slider--display',
              dots: false,
              centerMode: true,
              focusOnSelect: true
            });
          }, 1000)

        }
      }
    }

  }
);

