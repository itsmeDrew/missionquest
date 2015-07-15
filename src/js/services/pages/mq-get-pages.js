'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Pages', [])
      .service('Pages', Pages);

      function Pages($q, $http) {
        var _pages = [];

        this.getAll = getAll;
        this.getById = getById;

        function getAll() {
          var deferred = $q.defer();

          if (_pages.length) {
            deferred.resolve(_pages);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/posts?type[]=page')
              .success(function(result) {
                _pages = result;

                deferred.resolve(result);
              })
              .error(function(result) {
                 deferred.reject(result);
              });
          }
          return deferred.promise;
        }

        function getById(pageId) {
          var deferred = $q.defer();

          if (_pages.length) {
            deferred.resolve(_pages);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/posts?type[]=page&filter[page_id]=' + pageId)
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

