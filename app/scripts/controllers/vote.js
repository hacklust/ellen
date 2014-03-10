'use strict';

angular.module('ellenApp')
  .controller('VoteCtrl', function ($scope, $ionicModal, FeedService, VoteService) {
    $scope.upvote = function(feedID) {
      var feed = FeedService.findById(feedID);
      feed.$on('loaded', function(){
        if (VoteService.isUpVoted(feed)) {
          VoteService.clearvote(feed, feedID, true);
        } else {
          VoteService.upvote(feed, feedID);
        }
      });
    }

    $scope.downvote = function(feedID) {
      var feed = FeedService.findById(feedID);
      feed.$on('loaded', function(){
        if (VoteService.isDownVoted(feed)) {
          VoteService.clearvote(feed, feedID, false);
        } else {
          VoteService.downvote(feed, feedID);
        }
      });
    }
  });
