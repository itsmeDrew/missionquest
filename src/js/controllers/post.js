'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Post', [])
      .controller('PostController', PostController);

    function PostController(Post, $stateParams) {
      var vm = this;

      updatePost();

      function updatePost() {
        vm.loaded = false;
        Post.getById($stateParams.postId)
          .then(function(result) {
            vm.post = result.posts;
          })
      }

    }

  }
);

