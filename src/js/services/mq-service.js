'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqService', [])
      .service('MqService', function ($q, $http) {
         //returns a promise
        var deferred = $q.defer();

        $http.get('http://missionquest.dev/api/wp-json/posts')
          .success(function (result) {
              deferred.resolve(result);
          })
          .error(function (result) {
              deferred.reject(result);
          });

        return deferred.promise;
      }
    );
  }
);
