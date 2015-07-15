
'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Home', [])
      .controller('HomeController', HomeController);

    function HomeController(Post) {
      var vm = this;
      vm.perPage = 4;
      vm.page = 1; //only want the first 4 recent posts

      getHomeData();

      function getHomeData() {
        Post.getById(30)
          .then(function (result) {
            vm.post = result.posts;
            vm.sliderImages = result.posts.custom_fields.slider_images;
          })

        getRecentProducts();
      }

      function getRecentProducts() {
        Post.getAll(vm.page, vm.perPage)
          .then(function (result) {
            vm.recentProducts = [ ];
            for (var i = 0; i < result.posts.length; i++) {
              vm.recentProducts.push(result[i]);
            };
            console.log('vm.recentProducts:', vm.recentProducts);
          })
      }

    }

  }
);

