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
        console.log('trying to get', $stateParams.postID);
        Post.getById($stateParams.postID)
          .then(function(result) {
            console.log('got this for you...', result.posts);
            vm.item = result.posts;
            vm.loaded = !vm.loaded;
          })
      }

    }

  }
);

