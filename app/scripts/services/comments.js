'use strict';

angular.module('ellenApp')
  .factory('comments', function ($firebase, firebaseRef) {
    return {
      get: function(pid) {

      },
      add: function(comment) {
        var c = {
          author_id: comment.author_id,
          post_id: comment.post_id,
          content: comment.content,
          created: Firebase.ServerValue.TIMESTAMP
        }
        ref.push(c);
        return c;
      }
    }
  });
