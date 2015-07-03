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
    ])
    .controller('MqController', mqCtrl)
    .config(mqConfig);

    function mqCtrl (MqService, $q) {
      var vm = this;

      MqService.then(function (response) {
        vm.postData = response;
      });
    }

    function mqConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      $stateProvider
      .state('state', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'partials/_header.html'
          },
          'nav@state': {
            templateUrl: 'partials/_nav-main.html'
          },
          'content': {
            templateUrl: 'home.tpl.html'
          },
          'footer': {
            templateUrl: 'partials/_footer.html'
          }
        }
      })
      .state('state.products', {
        url: 'products',
        views: {
          'content@': {
            templateUrl: 'products.tpl.html'
          }
        }
      })
      .state('state.home', {
        url: 'home',
        views: {
          'content@': {
            templateUrl: 'home.tpl.html'
          }
        }
      });
    }
    //end
  }
  );
