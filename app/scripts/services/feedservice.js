'use strict';

angular.module('ellenApp')
  .factory('FeedService', function ($firebase, firebaseRef, UserService) {
    
    var ref = firebaseRef('/feeds');
    var feeds = $firebase(ref);

    return {
      all: feeds,
      add: function(post) {
        var user = UserService.getCurrent();

        post.dateCreated = Firebase.ServerValue.TIMESTAMP;
        post.author = {id: user.id, name: user.name, pic: user.pic};
        post.upvotes = 0;
        post.$priority = post.type;

        return feeds.$add(post).then(function(refPost){
          // persist post to author
          user.$child(post.type).$child(refPost.name()).$set({id: refPost.name()});
        })
      },
      findById: function(id){
        return feeds.$child(id)
      }
    }
  });