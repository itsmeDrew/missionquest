'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Product', [])
      .controller('ProductController', ProductController);

    function ProductController(Post, $location, $stateParams, $state) {
      var vm = this;

      vm.loaded = false;

      updatePost();

      function updatePost() {
        console.log('getting product')
        Post.getById($stateParams.postID)
          .then(function(result) {
            vm.item = result.posts;
            vm.loaded = !vm.loaded;
            vm.customFields = vm.item.custom_fields;
            vm.images = vm.customFields.product_images;
            vm.sliderImages = vm.customFields.product_images;
            vm.madeInUsa = vm.customFields.made_in_usa;

            console.log('vm.item:', vm.item);
            if (vm.customFields.product_details) {
              vm.productDetails = vm.customFields.product_details[0];
            }

          })
      }

    }

  }
);

