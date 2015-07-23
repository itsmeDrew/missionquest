'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Product.Category', [])
      .service('ProductCategory', ProductCategory);

      function ProductCategory($q, $http) {
        var _childCategories = [];

        this.getAll = getAll;
        this.getParent = getParent;

        function getAll() {
          var deferred = $q.defer();

          if (_categories.length) {
            deferred.resolve(_categories);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/taxonomies/product_category/terms')
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

        function getParent(catSlug) {
          var _categories = [
            {
              parentCategories: []
            },
            {
              childrenCategories: []
            }
          ];
          var deferred = $q.defer();

          if (_categories[0].length || _categories[1].length) {
            deferred.resolve(_categories);
          } else {
            $http.get('http://missionquest.dev/api/wp-json/taxonomies/product_category/terms?filter[order]=DESC')
              .success(function(result) {
                for (var i = result.length - 1; i >= 0; i--) {
                  if (! result[i].parent && result[i].slug !== 'uncategorized') {
                    _categories[0].parentCategories.push(result[i]);
                  } else if (result[i].parent.slug === catSlug) {
                    _categories[1].childrenCategories.push(result[i]);
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

      }
  }
);

