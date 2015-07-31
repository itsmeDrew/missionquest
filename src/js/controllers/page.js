'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Page', [])
      .controller('PageController', PageController);

    function PageController(Pages, $state, $stateParams) {
      var vm = this;

      vm.loaded = false;
      vm.pageID = $stateParams.ID;

      updatePost();

      function updatePost() {
        Pages.getById(vm.pageID)
          .then(function (result) {
            console.log('result:', result);
            vm.page = result;
            vm.content = vm.page.content;
          });
      }

    }

  }
);

