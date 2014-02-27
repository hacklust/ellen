'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef, auth) {
    
      // ref questions
      var ref = firebaseRef('/questions');
      // get all questions
      var questions = $firebase(ref);

      
      var auth = auth.getAuth();
      return {
        all: questions,
        create: function(question) {
          question.created = Firebase.ServerValue.TIMESTAMP;
          question.author = {id: auth.user.id, name: auth.user.name};
          return ref.push(question);
        },
        find: function(id) {
          return questions.$child(id);
        },
        delete: function(id) {
          return questions.$remove(id);
        }
      }
  });
