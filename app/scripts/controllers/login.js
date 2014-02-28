'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function ($rootScope, $scope, simpleLogin, UserService) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err, user) {
        $scope.err = err? err + '' : null;
      });
    };

  });
