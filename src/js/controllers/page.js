'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Page', [])
      .controller('PageController', PageController);

    function PageController(Pages, $state, $sce, $stateParams) {
      var vm = this;

      vm.loaded = false;
      vm.pageID = $stateParams.ID;

      updatePost();

      function updatePost() {
        Pages.getById(vm.pageID)
          .then(function (result) {
            vm.page = result;
            vm.content = vm.page.content;
            vm.hero = vm.page.custom_fields.hero[0];
            vm.heroImg = vm.hero.hero_image;
            vm.heroText = vm.hero.hero_text;

            vm.contentHTML = function () {
              return $sce.trustAsHtml(vm.content);
            }
          });
      }

    }

  }
);

