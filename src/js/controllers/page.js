'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Page', [])
      .controller('PageController', PageController);

    function PageController() {
      var vm = this;

      vm.loaded = false;

      updatePost();

      function updatePost() {
        console.log('getting page data');
      }

    }

  }
);

