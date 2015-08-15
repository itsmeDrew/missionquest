'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Product', [])
      .controller('ProductController', ProductController);

    function ProductController(product) {
      var vm = this;
      var _called = false;

      vm.item = product;
      vm.customFields = vm.item.custom_fields;
      vm.images = vm.customFields.product_images;
      vm.sliderImages = vm.customFields.product_images;
      vm.madeInUsa = vm.customFields.made_in_usa;
      vm.onComplete = onComplete;

      if (vm.customFields.product_details) {
        vm.productDetails = vm.customFields.product_details[0];
      }


        function onComplete() {
          console.log('ran onComplete')
          if (! _called) {
            _called = true;
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
            focusOnSelect: true
          });
        }

    }
  }
);

