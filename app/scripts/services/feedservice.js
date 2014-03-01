'use strict';

angular.module('ellenApp')
  .factory('FeedService', function ($firebase, firebaseRef, UserService) {
    // ref feeds
    var ref = firebaseRef('/feeds');
    // get all feeds
    var feeds = $firebase(ref.startAt(Date.now()));

    return {
      all: feeds,
      find: function(feedId) {
        return feeds.$child(feedId);
      },
      upvote: function(feedId, answer) {
        if(UserService.signedIn()){
          var user = UserService.getCurrent();

          var feed = feeds.$child(feedId);

          feed.$child('upvotes').$child(user.id).$set(user.id).then(function(){
            user.$child('upvotes').$child(feedId).$set(feedId);
            feed.$child('downotes').$remove(user.id);
            user.$child('downvotes').$remove(feedId);

            feed.$child('score').$transaction(function(score){
              if(!score) {
                return 1;
              }

              return score + 1;
            })
          })
        }
      },
      downvote: function(feedId) {
        if(UserService.signedIn()){
          var user = UserService.getCurrent();
          var feed = feeds.$child(feedId);

          feed.$child('downvotes').$child(user.id).$set(user.id).then(function(){
            user.$child('downvotes').$child(feedId).$set(feedId);
            feed.$child('upvotes').$remove(user.id);
            user.$child('upvotes').$remove(feedId);

            feed.$child('score').$transaction(function(score){
              if(score === undefined || score === null) {
                return -1;
              }

              return score - 1;
            })
          })
        }
      },
      clearvote: function(feedId, upvoted) {
        if(UserService.signedIn()){
          var user = UserService.getCurrent();
          var userId = user.id;
          var feed = feeds.$child(feedId);

          feed.$child('upvotes').$remove(userId);
          feed.$child('downvotes').$remove(userId);
          user.$child('upvotes').$remove(feedId);
          user.$child('downvotes').$remove(feedId);
          feed.$child('score').$transaction(function(score){
            if(upvoted) {
              return score - 1;
            } else {
              return score + 1;
            }
          })
        }
      },
      upvoted: function(feed) {
        if (UserService.signedIn() && feed.upvotes) {
          return feed.upvotes.hasOwnProperty(UserService.getCurrent().id);
        };
      },
      downvoted: function(feed) {
        if (UserService.signedIn() && feed.downvotes) {
          return feed.downvotes.hasOwnProperty(UserService.getCurrent().id)
        };
      }
    };
  });
