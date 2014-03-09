'use strict';

angular.module('ellenApp')
  .directive('scrollIf', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$on('Finished', function(){
          var chat_height = element[0].clientHeight;
          element[0].scrollTop = chat_height;
        })
      }
    };
  });
