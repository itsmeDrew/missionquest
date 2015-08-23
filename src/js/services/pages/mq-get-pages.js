'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Pages', [])
      .service('Pages', Pages);

      function Pages($q, $http, config) {

        this.getAll = getAll;
        this.getById = getById;
        this.getByName = getByName;

        function getAll() {
          var deferred = $q.defer();
          var _pages = [];

          if (_pages.length) {
            deferred.resolve(_pages);
          } else {
            $http.get(config.api.posts + '?type[]=page')
              .success(function(result) {
                var exludeSlug = 'private';

                for (var i = 0; i < result.length; i++) {
                  if (result[i].parent && result[i].parent.slug !== exludeSlug || result[i].slug !== exludeSlug && !result[i].parent) {
                    _pages.push(result[i]);
                  }
                };

                deferred.resolve(_pages);
              })
              .error(function(result) {
                 deferred.reject(_pages);
              });
          }
          return deferred.promise;
        }

        function getById(pageId) {
          var deferred = $q.defer();
          var _pages = [];

          if (_pages.length) {
            deferred.resolve(_pages);
          } else {
            $http.get(config.api.posts + '?type[]=page&filter[page_id]=' + pageId)
              .success(function(result) {
                _pages = result[0];

                deferred.resolve(_pages);
              })
              .error(function(result) {
                 deferred.reject(result);
              });
          }
          return deferred.promise;
        }

        function getByName(pageName) {
          var deferred = $q.defer();
          var _pages = [];

          if (_pages.length) {
            deferred.resolve(_pages);
          } else {
            $http.get(config.api.posts + '?type[]=page&filter[name]=' + pageName)
              .success(function(result) {
                _pages = result[0];

                deferred.resolve(_pages);
              })
              .error(function(result) {
                 deferred.reject(result);
              });
          }
          return deferred.promise;
        }

      }
  }
);

