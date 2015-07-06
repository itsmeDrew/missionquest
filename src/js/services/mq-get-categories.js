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

