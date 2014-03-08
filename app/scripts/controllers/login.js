'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function($scope, Auth, UserService) {
    $scope.err = '';
    $scope.createMode = false;
    $scope.user = {};

    $scope.login = function(isValid) {
        console.log(isValid);
        if (isValid) {
          Auth.login($scope.user).then(function(authUser){
            UserService.login(authUser);
          });
        };
    }

    $scope.register = function(isValid) {
      if (isValid) {
        console.log(isValid);
        Auth.createAccount($scope.user).then(function(authUser){
          UserService.create(authUser, $scope.user);
        });
      };
    }

    // $scope.login = function(service) {
    //   simpleLogin.login(service, function(err) {
    //     $scope.err = err? err + '' : null;
    //   });
    // };

    // $scope.loginPassword = function(cb) {
    //   $scope.err = null;
    //   if( !$scope.email ) {
    //     $scope.err = 'Please enter an email address';
    //   }
    //   else if( !$scope.pass ) {
    //     $scope.err = 'Please enter a password';
    //   }
    //   else {
    //     simpleLogin.loginPassword($scope.email, $scope.pass, function(err, user) {
    //       $scope.err = err? err + '' : null;
    //       if( !err && cb ) {
    //         cb(user);
    //       }
    //     });
    //   }
    // };

    // $scope.logout = simpleLogin.logout;

    // $scope.createAccount = function() {
    //   console.log($scope.email1);
    //   function assertValidLoginAttempt() {
    //     if( !$scope.email ) {
    //       $scope.err = 'Please enter an email address';
    //     }
    //     else if( !$scope.pass ) {
    //       $scope.err = 'Please enter a password';
    //     }
    //     else if( $scope.pass !== $scope.confirm ) {
    //       $scope.err = 'Passwords do not match';
    //     }
    //     return !$scope.err;
    //   }

    //   $scope.err = null;
    //   if( assertValidLoginAttempt() ) {
    //     simpleLogin.createAccount($scope.email, $scope.pass, function(err, user) {
    //       if( err ) {
    //         $scope.err = err? err + '' : null;
    //       }
    //       else {
    //         // must be logged in before I can write to my profile
    //         $scope.login(function() {
    //           simpleLogin.createProfile(user.uid, user.email);
    //           $location.path('/account');
    //         });
    //       }
    //     });
    //   }
    // };
  });
