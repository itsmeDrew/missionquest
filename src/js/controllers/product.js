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
        Post.getById($stateParams.postID)
          .then(function(result) {
            vm.item = result.posts;
            vm.loaded = !vm.loaded;
          })
      }

    }

  }
);

