'use strict';

angular.module('ellenApp')
  .factory('AnswerService', function ($firebase, firebaseRef, UserService) {

    var ref = firebaseRef('/questions');
    var questions = $firebase(ref);

    return {
      add: function(post, postId, answer) {
        var user = UserService.getCurrent();

        answer.created = Firebase.ServerValue.TIMESTAMP;
        answer.author = {id: user.id, name: user.name};
        answer.postId = postId;
        
        post.$child('answers').$add(answer).then(function(ref){
          user.$child('answers').$child(ref.name()).$set({id: ref.name(), postId: postId});
        });
      },
      delete: function(post, comment, commentId) {
        var user = UserService.findById(comment.author.id);
        post.$child('comments').$remove(commentId).then(function(){
          user.$child('comments').$remove(commentId);
        });
      },
      find: function(questionId, answerId) {
        console.log(questionId + ' : ' + answerId);
        return questions.$child(questionId).$child('answers').$child(answerId);
      },
    };
  });
