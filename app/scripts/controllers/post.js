'use strict';

angular.module('ellenApp')
  .controller('PostCtrl', function ($scope, $stateParams, FeedService) {
    
    $scope.feed = FeedService.findById($stateParams.id);

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
