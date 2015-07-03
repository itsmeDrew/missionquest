'use strict';

define(
  [
  'angular',
  'uiRouter',
  'templates',
  'services/mq-service',
  'directives/mq-directive'

  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqService'
        // 'App.MqDirective.Header'
        ])
    .controller('MqController', mqCtrl)
    .config(mqConfig);

    function mqCtrl (MqService, $q) {
      var vm = this;

      MqService.then(function (response) {
        vm.postData = response;
      });
    }

    function mqConfig ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('app', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'partials/_header.html'
          },
          'content': {
            templateUrl: 'home.tpl.html'
          },
          'footer': {
            templateUrl: 'partials/_footer.html'
          }
        }
      })
      .state('app.products', {
        url: 'products',
        views: {
          'content@': {
            templateUrl: 'products.html'
          }
        }
      })
      .state('app.default', {
        url: 'default',
        views: {
          'content@': {
            templateUrl: 'default.tpl.html'
          }
        }
      });
    }
    //end
  }
  );
