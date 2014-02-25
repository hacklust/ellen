'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function($scope, simpleLogin) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err, user) {
        $scope.err = err? err + '' : null;
        // on login what are you gonna do with the profile info
        // probablys save a copy in firebase
        
      });
    };

  });
