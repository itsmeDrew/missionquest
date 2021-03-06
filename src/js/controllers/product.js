'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Product', [])
      .controller('ProductController', ProductController);

    function ProductController(product, $scope) {
      var vm = this;
      var _called = false;

      vm.item = product;
      vm.customFields = vm.item.custom_fields;
      vm.images = vm.customFields.product_images;
      vm.sliderImages = vm.customFields.product_images;
      vm.madeInUsa = vm.customFields.made_in_usa;
      vm.onComplete = onComplete;
      vm.showColor = false;

      $scope.$emit('data.loading');

      if (vm.customFields.product_details) {
        vm.productDetails = vm.customFields.product_details[0];
      }


      function onComplete() {
        if (! _called) {
          _called = true;
        } else {
          return;
        }

        $('.js-product-slider--display').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          fade: true,
          asNavFor: '.js-product-slider--nav'
        });

        $('.js-product-slider--nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          asNavFor: '.js-product-slider--display',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 970,
              settings: {
                slidesToShow: 2,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        $scope.$emit('data.loaded');
      }

    }
  }
);

