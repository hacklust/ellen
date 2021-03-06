'use strict';

angular.module('ellenApp')
  .controller('MainCtrl', function ($scope, $ionicLoading) {

    $scope.show = function() {
      $scope.loading = $ionicLoading.show({
        content: 'Please wait...<br><i class="ion-load-c"></i>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 100
      });
    };

    $scope.hide = function() {
      $scope.loading.hide();
    };

    $scope.toggleMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };

    $scope.leftButtons = [
      { 
        type: 'button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
          $scope.toggleMenu();
        }
      }
    ];
    $scope.rightButtons = [
      { 
        type: 'button-clear',
        content: 'Edit',
        tap: function(e) {
        }
      }
    ]
  });
