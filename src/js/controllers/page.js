'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Page', [])
      .controller('PageController', PageController);

    function PageController(page, $state, $sce) {
      var vm = this;

      vm.page = page;
      vm.content = vm.page.content;
      vm.hero = vm.page.custom_fields.hero[0];
      vm.heroImg = vm.hero.hero_image;
      vm.heroText = vm.hero.hero_text;

      vm.contentHTML = function () {
        return $sce.trustAsHtml(vm.content);
      };

    }

  }
);

