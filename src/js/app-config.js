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
              templateUrl: 'partials/_header.html',
              controller: 'HeaderController',
              controllerAs: 'header'
            },
            'nav@home': {
              templateUrl: 'templates/nav.tpl.html',
              controller: 'NavController',
              controllerAs: 'nav'
            },
            'content': {
              templateUrl: 'templates/home.tpl.html',
              controller: 'BlogController',
              controllerAs: 'blog'
            },
            'footer': {
              templateUrl: 'partials/_footer.html'
            }
          }
        })
        .state('home.results', {
          url: 'search?terms',
          views: {
            'content@': {
              templateUrl: 'templates/results.tpl.html',
              controller: 'SearchController',
              controllerAs: 'search'
            }
          }
        })
        .state('home.products', {
          url: 'products',
          views: {
            'content@': {
              templateUrl: 'templates/products.tpl.html'
            }
          }
        })
        .state('home.category', {
          url: 'category/:catId',
          views: {
            'content@': {
              templateUrl: 'templates/category.tpl.html',
              controller: 'CategoryController',
              controllerAs: 'category'
            }
          }
        });
    }

  }
);
