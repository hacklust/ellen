'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef, UserService) {

    var ref = firebaseRef('/feeds');
    // get all questions
    var feeds = $firebase(ref.startAt('question').endAt('question'));
    feeds.$on('loaded', function(ref){
      console.log(ref);
    })
    return {
      all: feeds
    }
  });
