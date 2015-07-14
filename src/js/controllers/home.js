
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

      getPostData();

      function getPostData() {
        Post.getById(30)
          .then(function (result) {
            vm.post = result.posts;
            vm.sliderImages = result.posts.custom_fields.slider_images;
          })
      }

    }

  }
);

