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
      console.log($stateProvider);
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
              controller: 'HomeController',
              controllerAs: 'home'
            },
            'footer': {
              templateUrl: 'partials/_footer.html',
              controller: 'FooterController',
              controllerAs: 'footer'
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
        .state('home.category', {
          url: ':catSlug?catID',
          views: {
            'content@': {
              templateUrl: 'templates/category.tpl.html',
              controller: 'CategoryController',
              controllerAs: 'category'
            }
          }
        })
        .state('home.category.product', {
          url: '/:postSlug?postID',
          views: {
            'content@': {
              templateUrl: 'templates/products.tpl.html',
              controller: 'ProductController',
              controllerAs: 'product'
            }
          }
        });
    }

  }
);
