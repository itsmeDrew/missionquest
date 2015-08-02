
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

      getHomeData();

      function getHomeData() {
        Pages.getById(vm.homePageId)
          .then(function (result) {
            vm.page = result;
            vm.customFields = vm.page.custom_fields;
            vm.sliderImages = vm.customFields.slider_images;
            console.log('vm.page:', vm.page);
          })

        getRecentProducts();
      }

      function getRecentProducts() {
        Products.getAll(vm.page, vm.perPage)
          .then(function (result) {
            vm.recentProducts = result.posts;
          })
      }

    }

  }
);

