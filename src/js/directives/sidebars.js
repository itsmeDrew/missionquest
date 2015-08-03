
'use strict';

define(
  [
    'angular',
    'jquery'
  ],
  function(angular) {
    angular
      .module('App.MqDirective.Sidebars', [])
      .directive('categorySidebar', categorySidebar);

    function categorySidebar(ProductCategory, $state, $stateParams) {
      return {
        restrict: 'E',
        templateUrl: 'partials/_sidebar-category.html',
        controllerAs: 'sidebar',
        controller: function($scope) {
          var vm = this;

          vm.isCategoryState = $state.current.name === 'home.category';
          vm.categories = [];
          vm.children = [];
          vm.facet = false;
          vm.switchState = switchState;
          vm.catSlug = $stateParams.catSlug;

          var unbindCategories = $scope.$watchCollection(function() {
            return ProductCategory.getAll();
          }, function(categories) {
            if (categories.length) {
              vm.categories = categories;
              _setChildren(vm.catSlug);
              unbindCategories();
            }
          });

          function switchState(slug) {
            $state.go('home.category', { catSlug: slug } );
            _setChildren(slug);
          }

          function _setChildren(slug) {
            var parent = ProductCategory.findBySlug(slug);

            if (parent && parent.children && parent.children.length) {
              vm.children = parent.children;
            }
          }
        }
      }

    }
  }
);
