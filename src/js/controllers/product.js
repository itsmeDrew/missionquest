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
      console.log('$stateParams:', $stateParams);

      updatePost();

      function updatePost() {
        vm.loaded = false;
        Post.getById($stateParams.postId)
          .then(function(result) {
            vm.item = result.posts;
          })
      }

    }

  }
);

