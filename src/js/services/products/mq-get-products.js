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

      function Products($q, $http, config) {
        var _postsPerPage = 1;

        this.getAll = getAll;
        this.getByCategory = getByCategory;
        this.getById = getById;
        this.searchAll = searchAll;
        this.getByFacet = getByFacet;

        function getById(id) {
          var requestUrl = config.api.posts + '/' + id;
          return _makeRequest(requestUrl);
        }

        function getByCategory(cat, page) {
          var params = {
             page: parseInt(page, 10),
             'type[]': 'products',
             'filter[taxonomy]': 'product_category',
             'filter[term]': cat
          };

          return _makeRequest(config.api.posts, params);
        }

        function getAll(page, postsPerPage) {
          var params = {
            type: 'products',
            page: parseInt(page, 10),
            'filter[posts_per_page]': parseInt(postsPerPage, 10)
          };
          return _makeRequest(config.api.posts, params);
        }

        function getByFacet(cat, page, facet) {
          var deferred = $q.defer();
          var params = {
             page: parseInt(page, 10),
             'type[]': 'products',
             'filter[taxonomy]': 'product_category',
             'filter[term]': cat
          };
          var _facetProducts = [ ];

         $http.get(config.api.posts, { params: params || {} })
            .success(function(result) {
              for (var i = 0; i < result.length; i++) {
                var _productDetails = result[i].custom_fields.product_details[0];

                if (_productDetails.gender[0] == facet || _productDetails.gender[1] == facet || facet === 'made_in_usa' && result[i].custom_fields.made_in_usa == !! facet) {
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
          var params = {
            'filter[s]': term
          };

          return _makeRequest(config.api.posts, params);
        }

        function _makeRequest(requestUrl, params) {
          var deferred = $q.defer();

          $http.get(requestUrl, { params: params || {} })
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

