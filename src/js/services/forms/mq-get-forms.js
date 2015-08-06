'use strict';

define(
  [
    'angular',
    'uiRouter'
  ],
  function(angular) {
    angular
      .module('App.MqService.Forms', [])
      .service('Forms', Forms);

      function Forms($http, config) {
        var d = new Date;
        var expiration = 3600; // 1 hr
        var unixtime = parseInt(d.getTime() / 1000);
        var future_unixtime = unixtime + expiration;
        var publicKey = "32e6b14260";
        var privateKey = "c840d382671d193";
        var methodGet = "GET";
        var methodPost = "POST";
        var apiRoute = 'api/gravityformsapi/'
        var route = "forms";
        var vm = this;

        vm.submitForm = submitForm;
        vm.getForms = getForms;

        function CalculateSig(stringToSign, privateKey) {
          var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
          var base64 = hash.toString(CryptoJS.enc.Base64);
          return encodeURIComponent(base64);
        }

        function generateSig(newMethod, newRoute) {
          stringToSign = publicKey + ":" + newMethod + ":" + newRoute + ":" + future_unixtime;
          sig = CalculateSig(stringToSign, privateKey);
        }

        function getForms() {
          generateSig(methodGet, route);

          var _url = config.baseUrl + '/' + apiRoute + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

          $http.get(_url)
            .success(function(result) {
            })
            .error(function(result) {
              return false;
            });
        }

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

