
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

    function categorySidebar (ProductCategory, $state, $location) {
      return {
        restrict: 'E',
        templateUrl: 'partials/_sidebar-category.html',
        controller: function() {
          var vm = this;
          vm.isCategoryState = $state.current.name === 'home.category';
          vm.getCategories = getCategories;
          vm.facet = false

          if(vm.isCategoryState) {
            //only show facets in the category state
            vm.facet = ! vm.facet;
          }

          function getCategories() {
            ProductCategory.getParent()
              .then(function (result) {
                vm.categories = result;
              })
          }

        },
        controllerAs: 'sidebar'
      }

    }
  }
);

