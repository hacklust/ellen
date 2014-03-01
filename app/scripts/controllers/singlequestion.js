'use strict';

angular.module('ellenApp')
  .controller('SingleQuestionCtrl', function ($scope, $stateParams, QuestionService, FeedService) {

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

    $scope.question = QuestionService.find($stateParams.id);
    $scope.upVoteFeed = function (upVoted) {
      if (upVoted) {
        FeedService.clearvote($stateParams.id, upVoted);
      } else {
        FeedService.upvote($stateParams.id);
      }
    }

    $scope.upVoted  = function(feed) {
      return FeedService.upvoted(feed);
    }

  });