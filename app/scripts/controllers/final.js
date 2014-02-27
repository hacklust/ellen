'use strict';

angular.module('ellenApp')
  .controller('FinalCtrl', function ($scope, UserService) {
    $scope.auth = user.getAuth();

  });
