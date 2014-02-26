'use strict';

angular.module('ellenApp')
  .factory('answers', function ($firebase, firebaseRef) {
    // set ref
    var ref = firebaseRef('/answers');
    var answers = $firebase(ref);

    return {
      get: function(qid) {
        
      },
      add: function(answer) {
        var answer = {
          author_id: answer.author_id,
          question_id: answer.question_id,
          content: answer.content,
          created: Firebase.ServerValue.TIMESTAMP
        }
        ref.push(answer);
        return answer;
      }
    }
    
  });
