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

      function Forms($http) {
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

        console.log('getting that form son');

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

          var _url = 'http://missionquest.dev/' + apiRoute + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

          $http.get(_url)
            .success(function(result) {
              console.log('result', result);
            })
            .error(function(result) {
              return false;
            });
        }

        function submitForm (data, id) {
          var _route = route + '/' + id + '/submissions';
          console.log('_route:', _route);

          generateSig('POST', _route);
          var _url = 'http://missionquest.dev/' + apiRoute + _route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

          console.log('_url:', _url);
          console.log('data:', data);

          $.ajax({
              url: _url,
              type: 'POST',
              data: JSON.stringify(data)
          })
          .done(function (data, textStatus, xhr) {
              var response = JSON.stringify(data.input_values, null, '\t');
              console.log(response, textStatus, xhr);
          })

        }

      }

  }
);

