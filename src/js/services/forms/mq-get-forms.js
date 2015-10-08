'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Forms', [])
      .service('Forms', Forms);

      function Forms($http, config) {
        var vm = this;
        var d = new Date;
        var expiration = 3600; // 1 hr
        var unixtime = parseInt(d.getTime() / 1000);
        var future_unixtime = unixtime + expiration;
        var publicKey = "32e6b142601";
        var privateKey = "c840d382671d1931";
        var methodGet = "GET";
        var methodPost = "POST";
        var apiRoute = 'api/gravityformsapi/'
        var route = "forms";

        vm.submitForm = submitForm;

        function submitForm(data, id) {
          var _url = config.baseUrl + '/api/gravityformsapi/forms/' + id + '/submissions';

          return $http({
              method: 'POST',
              url: _url,
              data: data
          });
        }

      }

  }
);

