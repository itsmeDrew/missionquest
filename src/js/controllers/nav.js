'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqController.Nav', [])
      .controller('NavController', NavController);

    function NavController($scope, $rootScope, $location, Category) {
      var vm = this;
      var mobileMenuActive = $('body').hasClass('mobile-menu--active');
      var $windowEl = $(window);
      var breakPoint = 768;

      vm.categories = [];
      vm.getChildren = getChildren;
      vm.toggleMenu = toggleMenu;
      $rootScope.$mobile = false;

      init();

      function init() {
        updateCategories();
        responsiveCheck();

        if ( $windowEl.width() < breakPoint ) {
          $rootScope.$mobile = true;
        }

      }

      function responsiveCheck() {
        //setting rootscope variable for mobile.
        $windowEl.resize(function () {
          if ( $windowEl.width() < breakPoint ) {
            if (! $rootScope.$mobile) {
              $rootScope.$mobile = true;
            }
          } else {
            if ($rootScope.$mobile) {
              $rootScope.$mobile = false;
            }
          }
        })
      }

      function toggleMenu() {
        //only toggle the menu if you are in the mobile menu
        if ($rootScope.$mobile) {
          $scope.$emit('menu.toggle');
        }
      }

      function updateCategories () {
        Category.getParent()
          .then(function (result) {
            vm.categories = result;
          })
      }

      function getChildren(catID) {
        //will get children of the li
      }

    }

  }
);

