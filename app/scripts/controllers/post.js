'use strict';

angular.module('ellenApp')
  .controller('PostCtrl', function ($scope, $stateParams, FeedService, AnswerService, CommentService) {
    
    $scope.feed = FeedService.findById($stateParams.id);
    $scope.answer = {};
    $scope.comment = {};

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

    $scope.commentOn = function(isValid) {
      if (isValid) {
        CommentService.add($scope.feed, $scope.stateParams, $scope.comment);
        $scope.comment = {};
      };
    }

  });
