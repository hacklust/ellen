'use strict';

angular.module('ellenApp')
  .factory('questions', function ($firebase, firebaseRef) {
    
    // set ref
    var ref = firebaseRef('/questions');
    var questions = $firebase(ref);
    return {
      all: function() {
        return questions;
      },
      get: function(id) {
        return questions[id];
      },
      add: function(question) {
        var question = {
          author_id: question.author_id,
          title: question.title,
          content: question.content,
          category_id: question.cat_id,
          created: Firebase.ServerValue.TIMESTAMP
        }
        ref.push(question);
        return question;
      }
    }
  });
