'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqService.Product.Products', [])
      .service('Products', Products);

      function Products($q, $http) {
        var _postsPerPage = 1;

        this.getAll = getAll;
        this.getByCategory = getByCategory;
        this.getById = getById;
        this.searchAll = searchAll;
        this.getByFacet = getByFacet;

        function getById(id) {
          var url = 'http://missionquest.dev/api/wp-json/posts/' + id;
          return _makeRequest(url);
        }

        function getByCategory(cat, page) {
          var url = 'http://missionquest.dev/api/wp-json/posts?type[]=products&filter[taxonomy]=product_category&filter[term]=' + cat;
          var params = {
             page: parseInt(page, 10)
          };
          return _makeRequest(url, params);
        }

        function getAll(page, postsPerPage) {
          var url = 'http://missionquest.dev/api/wp-json/posts';
          var params = {
            'type': 'products',
            page: parseInt(page, 10),
            'filter[posts_per_page]': parseInt(postsPerPage, 10)
          };

          return _makeRequest(url, params);
        }

      function getByFacet(cat, page, facet) {
        var deferred = $q.defer();
        var url = 'http://missionquest.dev/api/wp-json/posts?type[]=products&filter[taxonomy]=product_category&filter[term]=' + cat;
        var params = {
          page: parseInt(page, 10)
        };
        var _facetProducts = [ ];

       $http.get(url, { params: params || {} })
          .success(function(result) {
            for (var i = 0; i < result.length; i++) {
              if (result[i].custom_fields.gender == facet || result[i].custom_fields.made_in_usa == !! facet) {
                _facetProducts.push(result[i]);
              }
            };

            deferred.resolve(_facetProducts);
          })
          .error(function(result) {
             deferred.reject(result);
          });

          return deferred.promise;
        }

      function searchAll(term) {
        var url = 'http://missionquest.dev/api/wp-json/posts';
        var params = {
          'filter[s]': term
        };

        return _makeRequest(url, params);
      }

        function _makeRequest(url, params) {
          var deferred = $q.defer();

          $http.get(url, { params: params || {} })
            .success(function(result, status, headers) {
              var response = {
                posts: result,
                totalPages: parseInt(headers('X-WP-TotalPages'), 10),
                totalPosts: parseInt(headers('X-WP-Total'), 10),
              };
              deferred.resolve(response);
            })
            .error(function(result) {
                deferred.reject(result);
            });

          return deferred.promise;
        }
      }

  }
);

