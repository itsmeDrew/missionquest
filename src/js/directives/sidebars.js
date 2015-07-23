
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

    function categorySidebar (ProductCategory, $state, $stateParams) {
      return {
        restrict: 'E',
        templateUrl: 'partials/_sidebar-category.html',
        controller: function() {
          var vm = this;
          vm.isCategoryState = $state.current.name === 'home.category';
          vm.getCategories = getCategories;
          vm.facet = false;
          vm.switchState = switchState;
          vm.catSlug = $stateParams.catSlug;

          console.log('vm.catSlug:', vm.catSlug);

          function getCategories() {
            ProductCategory.getParent(vm.catSlug)
              .then(function (result) {
                vm.categories = result[0].parentCategories;
                vm.childCategories = result[1].childrenCategories;
                console.log('result child cat', vm.childCategories)
                console.log('result:', result);
              })
          }

          function switchState(slug) {
            $state.go('home.category', { catSlug: slug } );
          }

        },
        controllerAs: 'sidebar'
      }

    }
  }
);

