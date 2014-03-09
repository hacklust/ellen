'use strict';

angular.module('ellenApp')
  .directive('scrollItem', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (scope.$last) {
          scope.$emit('Finished');
        };
      }
    };
  });
