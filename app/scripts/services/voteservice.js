'use strict';

angular.module('ellenApp')
  .factory('VoteService', function ($firebase, UserService) {
    
    return {
      upvote: function(item, itemID) {
        if (UserService.isLoggedIn()) {
          var user = UserService.getCurrent();
          item.$child('upvotes').$child(user.id).$set(user.id).then(function(){
            user.$child('upvotes').$child(itemID).$set(itemID);
            item.$child('downvotes').$remove(user.id);
            user.$child('downvotes').$remove(itemID);

            item.$child('score').$transaction(function(currentScore){
              if(!currentScore) {
                return 1;
              }
              return currentScore + 1;
            });
          });
        };
      },
      downvote: function(item, itemID) {
        if (UserService.isLoggedIn()) {
          var user = UserService.getCurrent();
          item.$child('downvotes').$child(user.id).$set(user.id).then(function(){
            user.$child('downvotes').$child(itemID).$set(itemID);
            item.$child('upvotes').$remove(user.id);
            user.$child('upvotes').$remove(itemID);

            item.$child('score').$transaction(function(currentScore){
              if (currentScore === undefined || currentScore === null) {
                return -1;
              };

              return currentScore - 1;
            });
          });
        };
      },
      clearvote: function(item, itemID, isUpVoted) {
        if (UserService.isLoggedIn()) {
          var user = UserService.getCurrent();

          item.$child('upvotes').$remove(user.id);
          item.$child('downvotes').$remove(user.id);
          user.$child('upvotes').$remove(itemID);
          user.$child('downvotes').$remove(itemID);

          item.$child('score').$transaction(function(currentScore){
            if (isUpVoted) {
              return currentScore - 1;
            } else {
              return currentScore + 1;
            }
          })

        };
      },
      isUpVoted: function(item) {
        if (UserService.isLoggedIn() && item.upvotes) {
          var user = UserService.getCurrent();
          return item.upvotes.hasOwnProperty(user.id);
        };
      },
      isDownVoted: function(item) {
        if (UserService.isLoggedIn() && item.downvotes) {
          var user = UserService.getCurrent();
          return item.downvotes.hasOwnProperty(user.id);
        };
      }
    }

  });
