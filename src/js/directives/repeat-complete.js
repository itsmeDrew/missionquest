'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    var uuid = 0;

    return angular.module('App.Common.RepeatComplete', [])
      .directive('repeatComplete', repeatComplete);

    function repeatComplete($rootScope) {
      return {
        priority: 1001,
        restrict: 'A',
        compile: function(element, attrs) {
          var id = ++uuid;
          var completeExpression = attrs.repeatComplete;
          var parent = element.parent();
          var parentScope = parent.scope() || $rootScope;

          element.attr('repeat-complete-id', id);
          element.removeAttr('repeat-complete');

          var unbindWatcher = parentScope.$watch(function() {
            var lastItem = parent.children('*[repeat-complete-id=' + id + ']:last');
            var itemScope = lastItem.scope();

            if ( ! lastItem.length) {
              return;
            }

            if (itemScope.$last) {
              if (attrs.hasOwnProperty('bindOnce')) {
                unbindWatcher();
              }

              itemScope.$eval(completeExpression);
            }
          });
        }
      };
    }
  }
);