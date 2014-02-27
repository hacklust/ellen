'use strict';

angular.module('ellenApp')
  .factory('questions', function ($firebase, firebaseRef, auth) {
      var ref = firebaseRef('/questions');
      var questions = $firebase(ref);
      var auth = auth.getAuth();
      return {
        all: questions,
        create: function(question) {
          question.created = Firebase.ServerValue.TIMESTAMP;
          question.authorID = auth.user.id;
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
