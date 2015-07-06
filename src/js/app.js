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
  'controllers/blog'
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
      'App.MqController.Blog'
    ])
    .controller('MqController', mqCtrl);

    function mqCtrl(Category) {
      var vm = this;

      Category.getParent()
        .then(function(result) {
          console.log(result);
          vm.categories = result;
        })
    }

  }
  );
