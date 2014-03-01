'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, Auth, FeedService) {

    $scope.feeds = FeedService.all;
    
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


  });
