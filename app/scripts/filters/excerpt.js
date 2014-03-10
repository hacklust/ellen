'use strict';

angular.module('ellenApp')
  .filter('excerpt', function () {
    return function (input, limit) {
      return input.substring(0, limit) + '...';
    };
  });
