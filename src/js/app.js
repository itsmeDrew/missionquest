'use strict';

define(
  [
  'angular',
  'uiRouter',
  'jquery',
  'slick',
  'app-config',
  'templates',
  'services/products/mq-get-categories',
  'services/products/mq-get-products',
  'services/posts/mq-get-posts',
  'services/pages/mq-get-pages',
  'controllers/header',
  'controllers/search',
  'controllers/home',
  'controllers/category',
  'controllers/product',
  'controllers/blog',
  'controllers/nav',
  'controllers/footer',
  'directives/loading',
  'directives/product-block',
  'directives/sliders'
  ],
  function(angular) {
    angular
    .module('App', [
      'ui.router',
      'App.Templates',
      'App.MqConfig',
      'App.MqService.Post.Posts',
      'App.MqService.Product.Category',
      'App.MqService.Product.Products',
      'App.MqService.Pages',
      'App.MqController.Header',
      'App.MqController.Search',
      'App.MqController.Home',
      'App.MqController.Category',
      'App.MqController.Product',
      'App.MqController.Blog',
      'App.MqController.Nav',
      'App.MqController.Footer',
      'App.MqDirective.Loading',
      'App.MqDirective.ProductBlock',
      'App.MqDirective.Sliders'
    ])
    .controller('MqController', mqCtrl);

    function mqCtrl($scope) {
      var vm = this;

      vm.phone = "941.555.5555";
      vm.address = "P Sherman 42 Wallabe Way, Sydney";
      vm.email = "tom@missionquestadv.com";
      vm.menuOpen = false;
      vm.searchOpen = false;

      $scope.$on('menu.toggle', function() {
        vm.menuOpen = ! vm.menuOpen;
      });

      $scope.$on('search.toggle', function() {
        vm.searchOpen = ! vm.searchOpen;
      });

    }

  }
  );
