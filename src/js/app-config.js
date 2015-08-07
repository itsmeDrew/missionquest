'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqConfig', [])
      .constant('config', window.config)
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
          url: 'category/:catSlug',
          views: {
            'content@': {
              templateUrl: 'templates/category.tpl.html',
              controller: 'CategoryController',
              controllerAs: 'category'
            }
          }
        })
        .state('home.product', {
          url: 'products/:slug',
          views: {
            'content@': {
              templateUrl: 'templates/products.tpl.html',
              controller: 'ProductController',
              controllerAs: 'product'
            }
          },
          resolve: {
            product: function($stateParams, Products) {
              return Products.getBySlug($stateParams.slug)
                .then(getProduct);

              function getProduct(data) {
                var item = data.posts[0];

                if (! item) {
                  $state.go('home');
                } else {
                  return item;
                }
              }
            }
          }
        })
        .state('home.page', {
          url: ':pageName',
          views: {
            'content@': {
              templateUrl: 'templates/page.tpl.html',
              controller: 'PageController',
              controllerAs: 'page'
            }
          },
          resolve: {
            page: function ($stateParams, Pages) {
              return Pages.getByName($stateParams.pageName);
            }
          }
        });
    }

  }
);
