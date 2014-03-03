'use strict';

angular.module('ellenApp')
  .factory('CommentService', function ($firebase, UserService) {

    return {
      add: function(post, postId, comment) {

        var user = UserService.getCurrent();
        
        comment.created = Firebase.ServerValue.TIMESTAMP;
        comment.author = {id: user.id, name: user.name, pic: user.pic};
        comment.postId = postId;
        comment.$priority = Firebase.ServerValue.TIMESTAMP;

        post.$child('comments').$add(comment).then(function(ref){
          post.$child('commentCount').$transaction(function(count){
              if(!count) {
                return 1;
              }
              return count + 1;
            });
          user.$child('comments').$child(ref.name()).$set({id: ref.name(), postId: postId});
        });
      },
      delete: function(post, comment, commentId) {
        var user = UserService.findById(comment.author.id);
        post.$child('comments').$remove(commentId).then(function(){
          user.$child('comments').$remove(commentId);
        });
      }
    };

  });
