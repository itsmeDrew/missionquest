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

        function getById(id) {
          var url = 'http://missionquest.dev/api/wp-json/posts/' + id;
          return _makeRequest(url);
        }

        function getByCategory(cat, page, postsPerPage) {
          var url = 'http://missionquest.dev/api/wp-json/posts?type[]=products&filter[taxonomy]=product-category&filter[term]=' + cat;
          var params = {
             page: parseInt(page, 10),
            'filter[posts_per_page]': parseInt(postsPerPage, 10)
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
              console.log('response:', response);
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

