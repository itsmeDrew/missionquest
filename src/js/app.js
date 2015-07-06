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
      'App.MqService.Post',
      'App.MqService.Category'
    ])
    .controller('MqController', mqCtrl)
    .controller('CategoryController', CategoryController)
    .controller('BlogController', BlogController)
    .controller('NavController', NavController)
    .config(mqConfig);

    function BlogController($location, Post) {
      var vm = this;

      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = parseInt($location.search().limit || 1, 10);
      vm.updateLimit = updateLimit;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      updatePosts();

      function nextPage() {
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        vm.page--;

        updatePosts();
      }

      function updateLimit() {
        vm.perPage = 2;
        vm.page = 1;

        updatePosts();
      }

      function updatePosts() {
        Post.getAll(vm.page, vm.perPage)
          .then(function(result) {
            vm.posts = result;
            $location.search({
              page: vm.page,
              limit: vm.perPage
            });
          });
      }
    }

    function mqCtrl(Category) {
      var vm = this;

      Category.getAll()
        .then(function(result) {
          vm.categories = result;
        })
    }

    function CategoryController($location, Post, $stateParams) {
      var vm = this;

      vm.totalPosts = 0;
      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = parseInt($location.search().limit || 1, 10);
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;

      updatePosts();

      function updatePosts() {
        Post.getByCategory($stateParams.catId, vm.page, vm.perPage)
          .then(function(result) {
            vm.posts = result.posts;
            vm.totalPosts = result.totalPosts;
            $location.search({
              page: vm.page,
              limit: vm.perPage
            });
          })
      }

      function nextPage() {
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        vm.page--;

        updatePosts();
      }

    }

    function NavController() {

    }

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
              templateUrl: 'partials/_nav-main.html',
              controller: 'NavController',
              controllerAs: 'nav'
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
