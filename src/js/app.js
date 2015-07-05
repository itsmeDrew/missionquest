'use strict';

define(
  [
  'angular',
  'uiRouter',
  'templates',
  'services/mq-get-categories',
  'services/mq-get-posts',
  'services/mq-get-category-posts'
  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqService.GetPosts',
      'App.MqService.GetCategories',
      'App.MqService.GetCategoryPosts'
    ])
    .controller('MqController', mqCtrl)
    .controller('CatController', catCtrl)
    .config(mqConfig);

    function mqCtrl (GetPosts, GetCategories) {
      var vm = this;

      getPostsData(GetPosts, vm);
      getAllCategories(GetCategories, vm);
    }

    function getPostsData (dataToGet, vm) {
      dataToGet.then(function (response) {
        vm.postData = response;
      });
    }

    function getAllCategories (dataToGet, vm) {
      dataToGet.then(function (response) {
        vm.categories = response;
      });
    }

    function catCtrl () {
      // category controller
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
      })
      .state('state.category', {
        url: 'category/:catId',
        views: {
          'content@': {
            templateUrl: 'category.tpl.html'
          }
        }
      });
    }

  }
  );
