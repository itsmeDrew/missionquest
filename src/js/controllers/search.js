'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Search', [])
      .controller('SearchController', SearchController);

    function SearchController(Products, $scope, $rootScope, $location) {
      var vm = this;

      vm.searchOpen = $scope.$parent.mq.searchOpen;
      vm.menuOpen = $scope.$parent.mq.menuOpen;
      vm.page = parseInt($location.search().page || 0, 10);
      vm.perPage = 8;
      vm.term = $location.$$search.terms;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.totalResults = 0;
      vm.updateOrderBy = updateOrderBy;
      vm.updateOrder = updateOrder;
      vm.setFacet = setFacet;
      vm.orderBy = '';
      vm.order = '';

      if (vm.menuOpen) {
        $scope.$emit('menu.toggle');
      } else if (vm.searchOpen) {
        $scope.$emit('search.toggle');
      }

      updatePosts();

      function updatePosts() {
        $scope.$emit('data.loading');

        Products.searchAll(vm.term, vm.orderBy, vm.order, vm.perPage)
          .then(function (result) {
            vm.results = result.posts;
            vm.totalResults = vm.results.length;
            vm.totalPages = Math.ceil(vm.totalResults / vm.perPage);

            console.log(result);

            $scope.$emit('data.loaded');
          });
      }

      function nextPage() {
        vm.page++;
      }

      function prevPage() {
        vm.page--;
      }

      function updatePostsPerPage(perPage) {
        $scope.$emit('data.loading');
        vm.page = 1;
        vm.perPage = perPage;

        updatePosts();
      }

      function updateOrderBy(orderBy) {
        $scope.$emit('data.loading');
        vm.page = 1;
        vm.orderBy = orderBy;

        if (orderBy === 'name') {
          vm.order = 'ASC';
        }

        updatePosts();
      }

      function updateOrder() {
        $scope.$emit('data.loading');
        vm.page = 1;

        if (vm.order === 'DESC' || vm.order === '') {
          vm.order = 'ASC';
        } else {
          vm.order = 'DESC';
        }

        updatePosts();
      }

      function setFacet(newFacet) {
        if (newFacet !== $stateParams.facet) {
          vm.facet = newFacet;
          updatePosts();
        }
      }

    }

  }
);

