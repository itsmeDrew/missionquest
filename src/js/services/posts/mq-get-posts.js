'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqService.Post.Posts', [])
      .service('Post', Post);

      function Post($q, $http, config) {
        var _postsPerPage = 1;

        this.getAll = getAll;
        this.getByCategory = getByCategory;
        this.getById = getById;
        this.searchAll = searchAll;

        function getById(id) {
          return _makeRequest(config.api.posts + id);
        }

        function getByCategory(cat, page, postsPerPage) {
          var params = {
             page: parseInt(page, 10),
            'filter[posts_per_page]': parseInt(postsPerPage, 10),
            'filter[cat]=': cat
          };
          return _makeRequest(config.api.posts, params);
        }

        function getAll(page, postsPerPage) {
          var params = {
            page: parseInt(page, 10),
            'filter[posts_per_page]': parseInt(postsPerPage, 10)
          };

          return _makeRequest(config.api.posts, params);
        }

      function searchAll(term) {
        var params = {
          type: 'products',
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
                totalPosts: parseInt(headers('X-WP-Total'), 10)
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

