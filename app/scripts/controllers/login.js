'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function ($rootScope, $scope, Auth, UserService) {

    $scope.user = {};

    $scope.login = function() {
      Auth.login($scope.user);
      $scope.user = {};
    }

    $scope.register = function() {
      Auth.register($scope.user).then(function(authUser){
        UserService.create(authUser, $scope.user);
        $scope.user = {};
      });
    }
  });
