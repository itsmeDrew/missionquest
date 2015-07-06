'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Category', [])
      .service('Category', Category);

      function Category($q, $http) {
        var _categories = [];

        this.getAll = getAll;
        this.getParent = getParent;

        function getParent() {
          var deferred = $q.defer();

          if (_categories.length) {
            deferred.resolve(_categories);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/taxonomies/category/terms')
              .success(function(result) {
                for (var i = result.length - 1; i >= 0; i--) {
                  if (! result[i].parent) {
                    _categories.push(result[i]);
                  }
                };
                deferred.resolve(_categories);
              })
              .error(function(result) {
                 deferred.reject(result);
              });
          }
          return deferred.promise;
        }

        function getAll() {
          var deferred = $q.defer();

          if (_categories.length) {
            deferred.resolve(_categories);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/taxonomies/category/terms')
              .success(function(result) {
                _categories = result;

                deferred.resolve(result);
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

