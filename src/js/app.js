'use strict';

define(
  [
  'angular',
  'uiRouter',
  'app-config',
  'templates',
  'services/mq-get-categories',
  'services/mq-get-posts',
  'controllers/category',
  'controllers/blog',
  'controllers/nav',
  'controllers/search'
  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqConfig',
      'App.MqService.Post',
      'App.MqService.Category',
      'App.MqController.Category',
      'App.MqController.Blog',
      'App.MqController.Nav',
      'App.MqController.Search'
    ])
    .controller('MqController', mqCtrl);

    function mqCtrl() {
      var vm = this;
    }

  }
  );
