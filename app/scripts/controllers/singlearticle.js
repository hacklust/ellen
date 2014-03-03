'use strict';

angular.module('ellenApp')
  .controller('SingleArticleCtrl', function ($scope, $stateParams, ArticleService, CommentService, FeedService) {

    $scope.article = ArticleService.find($stateParams.id);
    $scope.id = $stateParams.id;

    $scope.comment = {};

    $scope.commentOn = function() {
      CommentService.add($scope.article, $stateParams.id, $scope.comment);
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
