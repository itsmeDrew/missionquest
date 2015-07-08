'use strict';

define(
  [
  'angular',
  'uiRouter',
  'app-config',
  'templates',
  'services/mq-get-categories',
  'services/mq-get-posts',
  'controllers/header',
  'controllers/search',
  'controllers/category',
  'controllers/blog',
  'controllers/nav'
  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqConfig',
      'App.MqService.Post',
      'App.MqService.Category',
      'App.MqController.Header',
      'App.MqController.Search',
      'App.MqController.Category',
      'App.MqController.Blog',
      'App.MqController.Nav'
    ])
    .controller('MqController', mqCtrl);

    function mqCtrl() {
      var vm = this;

      vm.phone = "941.555.5555";
      vm.address = "P Sherman 42 Wallabe Way, Sydney";
      vm.email = "tom@missionquestadv.com";
    }

  }
  );
