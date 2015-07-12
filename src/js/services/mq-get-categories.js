'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Category', [])
      .service('Category', Category);

      //go through all categories and if parents id === varID then push to an array

      function Category($q, $http) {
        var _categories = [];
        var _childCategories = [];

        this.getAll = getAll;
        this.getParent = getParent;
        this.getChildren = getChildren;

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

        function getParent() {
          var deferred = $q.defer();

          if (_categories.length) {
            deferred.resolve(_categories);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/taxonomies/category/terms?filter[order]=DESC')
              .success(function(result) {
                for (var i = result.length - 1; i >= 0; i--) {
                  if (! result[i].parent && result[i].slug !== 'uncategorized') {
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

        function getChildren(paramID) {

        }

      }
  }
);

