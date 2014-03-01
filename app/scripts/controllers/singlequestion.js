'use strict';

angular.module('ellenApp')
  .controller('SingleQuestionCtrl', function ($scope, $stateParams, QuestionService, FeedService, AnswerService) {

    $scope.question = QuestionService.find($stateParams.id);
    $scope.answer = {};

    $scope.answerQuestion = function() {
      AnswerService.add($scope.question, $stateParams.id, $scope.answer);
      $scope.answer = {};
    }

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