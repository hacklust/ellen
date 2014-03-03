'use strict';

angular.module('ellenApp')
  .controller('LogoutCtrl', function ($scope, $location, Auth) {

    $scope.logout = function() {
      console.log(Auth.logout());
    }

  });
