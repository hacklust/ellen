'use strict';

angular.module('ellenApp')
  .controller('MainCtrl', function ($scope, posts) {
    $scope.feeds = posts.getAll();

  });
