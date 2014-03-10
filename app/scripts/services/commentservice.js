'use strict';

angular.module('ellenApp')
  .factory('CommentService', function ($firebase, UserService) {

    return {
      add: function(post, postID, comment) {
        var user = UserService.getCurrent();

        comment.dateCreated = Firebase.ServerValue.TIMESTAMP;
        comment.author = {id: user.id, name: user.name, pic: user.pic};
        comment.postId = postID;

        post.$child('comments').$add(comment).then(function(ref){
          post.$child('commentCount').$transaction(function(count){
            if(!count) {
              return 1;
            } else {
              return count + 1;
            }
          });
          user.$child('comments').$child(ref.name()).$set({id: ref.name(), postId: postID});
        });
      }
    }
    
  });
