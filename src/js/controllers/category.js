'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqController.Category', [])
      .controller('CategoryController', CategoryController);

    function CategoryController($location, $state, $rootScope, $scope, Products, Pages, ProductCategory, $stateParams) {
      var vm = this;
      var _bannerEl = $('.banner__md--wrapper');
      var _closedClassName = 'banner--closed';

      vm.totalProducts = 0;
      vm.page = parseInt($location.search().page || 1, 10);
      vm.perPage = 20;
      vm.catSlug = $stateParams.catSlug;
      vm.nextPage = nextPage;
      vm.prevPage = prevPage;
      vm.toggleBanner = toggleBanner;
      vm.bannerInit = bannerInit;
      vm.facet = true;
      vm.pageDataLoaded = false;
      vm.setFacet = setFacet;
      vm.updatePostsPerPage = updatePostsPerPage;
      vm.updateOrderBy = updateOrderBy;
      vm.updateOrder = updateOrder;
      vm.facet = $location.search().facet;
      vm.totalProducts = 0;
      vm.orderBy = '';
      vm.order = '';

      $scope.$emit('data.loading');
      updatePosts();

      function updatePosts() {
        vm.totalProducts = 0;

        if (vm.facet) {
          Products.getByFacet(vm.catSlug, vm.page, vm.facet, vm.perPage)
            .then(function(result) {
              vm.products = result;
              vm.totalProducts = result.length;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              $scope.$emit('data.loaded');
              vm.facet = $stateParams.facet;
            });
        } else {
          Products.getByCategory(vm.catSlug, vm.page, vm.orderBy, vm.order, vm.perPage)
            .then(function(result) {
              vm.products = result.posts;
              vm.totalProducts = result.totalPosts;
              vm.totalPages = Math.ceil(vm.totalProducts / vm.perPage);
              vm.name = $stateParams.catSlug;
              $scope.$emit('data.loaded');

              bannerInit();
              getPageData();
            });
        }
      }

      function getPageData() {
        Pages.getByName('category')
          .then(function(result) {
            vm.pageDataLoaded = !vm.pageDataLoaded;
            vm.pageResult = result;
            vm.bannerImage = vm.pageResult.custom_fields.banner_image;
            $scope.$emit('data.loaded');
          });
      }

      function nextPage() {
        $scope.$emit('data.loading');
        vm.page++;

        updatePosts();
      }

      function prevPage() {
        $scope.$emit('data.loading');
        vm.page--;

        updatePosts();
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

      function bannerInit() {
        if (!$rootScope.bannerUserClosed) {
          _bannerEl.removeClass(_closedClassName);
        }
      }

      function toggleBanner() {
        $rootScope.bannerUserClosed = !$rootScope.bannerUserClosed;

        _bannerEl.toggleClass(_closedClassName);
      }

    }
  }
);