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

      updatePost();

      function updatePost() {
        vm.loaded = false;
        Post.getById($stateParams.postID)
          .then(function(result) {
            vm.item = result.posts;
          })
      }

    }

  }
);

