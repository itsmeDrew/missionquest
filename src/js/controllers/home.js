
'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Home', [])
      .controller('HomeController', HomeController);

    function HomeController(Products, Pages, $stateParams, $state, $scope) {
      var vm = this;
      vm.perPage = 4;
      vm.page = 1; //only want the first 4 recent products
      vm.homePageId = 78;
      vm.setHero = setHero;

      getHomeData();

      function getHomeData() {
        Pages.getById(vm.homePageId)
          .then(function (result) {
            vm.page = result;
            vm.sliderImages = result.custom_fields.slider_images;
          })

        getRecentProducts();
      }

      function getRecentProducts() {
        Products.getAll(vm.page, vm.perPage)
          .then(function (result) {
            vm.recentProducts = result.posts;
          })
      }

      function setHero() {
        $scope.$emit('hero');
      }

    }

  }
);

