'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef) {

    var ref = firebaseRef('/types/question');
    // get all questions
    var questions = $firebase(ref);

    return {
      all: questions
    }
  });
