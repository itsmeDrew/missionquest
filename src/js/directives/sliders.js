
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
              autoplay: true,
              responsive: [
                {
                  breakpoint: breakpointSmall,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
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
          }
        }
      };
    }

  }
);

