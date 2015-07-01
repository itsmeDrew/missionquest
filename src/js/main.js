'use strict';

require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    almond: '../../bower_components/almond/almond',
    jquery: '../../bower_components/jquery/dist/jquery',
    uiRouter: '../../bower_components/ui-router/release/angular-ui-router'
  },
  shim: {
    angular: {
      exports: 'angular',
      deps: [ 'jquery' ]
    },
    uiRouter: [ 'angular' ]
  },
  deps: [
    'angular',
    'app'
  ],
  callback: function(angular) {
    // console.log('der');
    angular.bootstrap(document, [ 'App' ]);
  }
});