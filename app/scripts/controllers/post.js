'use strict';

angular.module('ellenApp')
  .controller('PostCtrl', function ($scope, $stateParams, FeedService, AnswerService) {
    
    $scope.feed = FeedService.findById($stateParams.id);
    $scope.answer = {};

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

    $scope.answerQuestion = function(isValid) {
      if (isValid) {
        AnswerService.add($scope.feed, $stateParams.id, $scope.answer);
        $scope.answer = {};
      };
    }

  });
