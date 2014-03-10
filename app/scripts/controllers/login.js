'use strict';

angular.module('ellenApp')
  .controller('LoginCtrl', function($scope, Auth, UserService, $ionicLoading, $rootScope, $firebase, $timeout) {
    $scope.err = false;
    $scope.createMode = false;
    $scope.user = {};

    $scope.login = function(isValid) {
      if (isValid) {
        $scope.showLoading();
        Auth.login($scope.user).then(function(authUser){
          $scope.hideLoading();
          UserService.login(authUser);
        });
        $rootScope.$on('$firebaseSimpleLogin:error', function (e, authUser) {
          $scope.err = authUser.code;
          $scope.hideLoading();
          $timeout(function(){
            $scope.err = false; 
          }, 2400);

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

    $scope.logout = function() {
      Auth.logout();
    }

    // ui

    $scope.showLoading = function() {
      $scope.loading = $ionicLoading.show({
        content: 'Please wait...<br><i class="ion-load-c"></i>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 100
      });
    };

    $scope.hideLoading = function() {
      $scope.loading.hide();
    };

  });
