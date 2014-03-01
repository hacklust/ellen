'use strict';

angular.module('ellenApp')
  .controller('LogoutCtrl', function ($scope, $location, Auth) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    Auth.logout();
    
  });
