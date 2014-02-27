'use strict';

angular.module('ellenApp')
  .factory('CommentService', function ($firebase, UserService) {

    return {
      add: function(post, postId, comment) {

        var user = UserService.getCurrent();
        
        comment.created = Firebase.ServerValue.TIMESTAMP;
        comment.author = {id: user.id, name: user.name};
        comment.postId = postId;

        post.$child('comments').$add(comment).then(function(ref){
          user.$child('comments').$child(ref.name()).$set({id: ref.name(), postId: postId})
        });
      },
      delete: function(post, comment, commentId, fbref) {
        var user = UserService.findById(comment.author.id);
        post.$child('comments').$remove(commentId).then(function(){
          user.$child('comments').$remove(commentId);
        });
      }
    }

  });
