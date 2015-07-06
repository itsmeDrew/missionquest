'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqConfig', [])
      .config(mqConfig);

    function mqConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'header': {
              templateUrl: 'partials/_header.html'
            },
            'nav@home': {
              templateUrl: 'partials/_nav-main.html'
            },
            'content': {
              templateUrl: 'home.tpl.html',
              controller: 'BlogController',
              controllerAs: 'blog'
            },
            'footer': {
              templateUrl: 'partials/_footer.html'
            }
          }
        })
        .state('home.products', {
          url: 'products',
          views: {
            'content@': {
              templateUrl: 'products.tpl.html'
            }
          }
        })
        .state('home.category', {
          url: 'category/:catId',
          views: {
            'content@': {
              templateUrl: 'category.tpl.html',
              controller: 'CategoryController',
              controllerAs: 'category'
            }
          }
        });
    }

  }
);
