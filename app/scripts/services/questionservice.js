'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/questions');
    // get all questions
    var questions = $firebase(ref);

    return {
      all: questions,
      add: function(question) {
        var user = UserService.getCurrent();

        question.created = Firebase.ServerValue.TIMESTAMP;
        question.author = {id: user.id, name: user.name};

        questions.$add(question).then(function(ref){
          user.$child('questions').$child(ref.name()).$set({id: ref.name()});
        });

      },
      find: function(id) {
        return questions.$child(id);
      },
      delete: function(id) {
        return questions.$remove(id);
      }

    };
  });
