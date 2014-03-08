'use strict';

angular.module('ellenApp')
  .controller('LoginController', function($scope, Auth, simpleLogin) {
    $scope.pass = '';
    $scope.err = '';
    $scope.confirm = '';
    $scope.createMode = false;
    $scope.user = {};

    // $scope.login = function() {
    //   Auth.login($scope.user).then(function(snap){
    //     console.log(snap);
    //   });
    // }

    // $scope.register = function() {
    //   Auth.createAccount($scope.email, $scope.password)
    // }

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
      });
    };

    $scope.loginPassword = function(cb) {
      $scope.err = null;
      if( !$scope.email ) {
        $scope.err = 'Please enter an email address';
      }
      else if( !$scope.pass ) {
        $scope.err = 'Please enter a password';
      }
      else {
        simpleLogin.loginPassword($scope.email, $scope.pass, function(err, user) {
          $scope.err = err? err + '' : null;
          if( !err && cb ) {
            cb(user);
          }
        });
      }
    };

    $scope.logout = simpleLogin.logout;

    $scope.createAccount = function() {
      console.log($scope.email1);
      function assertValidLoginAttempt() {
        if( !$scope.email ) {
          $scope.err = 'Please enter an email address';
        }
        else if( !$scope.pass ) {
          $scope.err = 'Please enter a password';
        }
        else if( $scope.pass !== $scope.confirm ) {
          $scope.err = 'Passwords do not match';
        }
        return !$scope.err;
      }

      $scope.err = null;
      if( assertValidLoginAttempt() ) {
        simpleLogin.createAccount($scope.email, $scope.pass, function(err, user) {
          if( err ) {
            $scope.err = err? err + '' : null;
          }
          else {
            // must be logged in before I can write to my profile
            $scope.login(function() {
              simpleLogin.createProfile(user.uid, user.email);
              $location.path('/account');
            });
          }
        });
      }
    };
  });
