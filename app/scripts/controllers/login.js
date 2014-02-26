'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function ($scope, simpleLogin, UserService) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err, user) {
        console.log(user);
        UserService.username = user.username;
        UserService.isLoggedin = true;
        $scope.err = err? err + '' : null;
        // on login what are you gonna do with the profile info
        // probablys save a copy in firebase
        
      });
    };

  });
