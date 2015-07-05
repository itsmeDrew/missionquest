'use strict';

define(
  [
  'angular',
  'uiRouter',
  'templates',
  'services/mq-get-categories',
  'services/mq-get-posts'
  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqService.GetPosts',
      'App.MqService.GetCategories'
    ])
    .controller('MqController', mqCtrl)
    .config(mqConfig);

    function mqCtrl (GetPosts, GetCategories, $q) {
      var vm = this;
      GetPosts.then(function (response) {
        vm.postData = response;
      });

      console.log(GetCategories);
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
            templateUrl: 'partials/_nav-main.html',
            controller: function ($scope) {
              console.log($scope, this)
            }
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

  }
  );
