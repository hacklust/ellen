'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService, FeedService) {
    
    $scope.questions = QuestionService.all;

    $scope.question = {};
    $scope.ask = function () {
      QuestionService.add($scope.question);
      $scope.question = {};
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

    $scope.upVoteFeed = function (feedId, upVoted) {
      if (upVoted) {
        FeedService.clearvote(feedId, upVoted);
      } else {
        FeedService.upvote(feedId);
      }
    }

    $scope.upVoted  = function(feed) {
      return FeedService.upvoted(feed);
    }

  });