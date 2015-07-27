
'use strict';

define(
  [
    'angular',
    'jquery',
    'slick',
    'directives/repeat-complete'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Sliders', [
        'App.Common.RepeatComplete'
      ])
      .directive('homeSlider', homeSlider)
      .directive('productSlider', productSlider);

    var breakpointSmall = 480;

    function homeSlider() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/sliders/_slider-home.html',
        link: function(scope, element) {
          scope.onComplete = onComplete;

          function onComplete() {
            element.slick({
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
          }
        }
      };
    }

    function productSlider() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/sliders/_slider-products.html',
        link: function(scope, element) {
          var _called = false;

          scope.onComplete = onComplete;

          function onComplete() {
            if (! _called) {
              _called = true;
              return;
            }

            element.find('.js-product-slider--display').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              swipeToSlide: true,
              arrows: false,
              fade: true,
              asNavFor: '.js-product-slider--nav'
            });

            element.find('.js-product-slider--nav').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true,
              asNavFor: '.js-product-slider--display',
              dots: false,
              centerMode: true,
              focusOnSelect: true
            });
          }
        }
      };
    }

  }
);

