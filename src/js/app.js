'use strict';

define(
  [
    'angular',
    'uiRouter',
    'templates',
    'mq-service'
  ],
  function(angular) {
    angular
      .module('App', [
        'ui.router',
        'App.Templates',
        'App.MqService'
      ])
      .controller('MqController', function (MqService, $q) {
        var vm = this;

        MqService.then(function (response) {
          vm.postData = response;
        });
      });
  }
);
