'use strict';

angular.module('ellenApp')
  .controller('ArticlesCtrl', function ($scope, ArticleService, FeedService) {

    $scope.articles = ArticleService.all;

    $scope.article ={};

    $scope.write = function() {
      ArticleService.add($scope.article);
      $scope.article ={};
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
