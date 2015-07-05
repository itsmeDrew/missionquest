'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqService.GetCategoryPosts', [])
      .service('GetCategoryPosts', getPosts);

      function getPosts ($q, $http, $stateParams) {
        //returns a promise
        var deferred = $q.defer();
        catID = $stateParams.catId;

        this.banjo = function () {
          $http.get('http://missionquest.dev/api/wp-json/posts?filter[cat]=' + catID)
          .success(function (result) {
              deferred.resolve(result);
          })
          .error(function (result) {
              deferred.reject(result);
          });
          return deferred.promise;
        }
      }

  }
);
