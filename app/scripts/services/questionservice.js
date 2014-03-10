'use strict';

angular.module('ellenApp')
      find: function(id) {
        return feeds.$child(id);
      },
      delete: function(id) {
        return feeds.$remove(id);
  .factory('QuestionService', function ($firebase, firebaseRef) {

    var ref = firebaseRef('/types/question');
    // get all questions
    var questions = $firebase(ref);

    return {
      all: questions
    }
  });
