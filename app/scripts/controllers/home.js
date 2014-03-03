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

    $scope.downVotePost = function (feedId, downVoted) {
      if (downVoted) {
        FeedService.clearVote(feedId, false);
      } else {
        FeedService.downvote(feedId);
      }
    };

    $scope.downVoted = function (feed) {
      return FeedService.downvoted(feed);
    };

  });
