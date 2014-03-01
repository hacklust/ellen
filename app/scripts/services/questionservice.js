'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/feeds');
    // get all questions
    var feeds = $firebase(ref.startAt('question').endAt('question'));
    feeds.$on('loaded', function(ref){
      console.log(ref);
    })
    return {
      all: feeds,
      add: function(question) {
        var user = UserService.getCurrent();

        question.created = Firebase.ServerValue.TIMESTAMP;
        question.author = {id: user.id, name: user.name, pic: user.pic};
        question.type = 'question';
        
        feeds.$add(question).then(function(ref){
          ref.setPriority('question');
          user.$child('questions').$set({id: ref.name()});
        });

      },
      find: function(id) {
        return feeds.$child(id);
      },
      delete: function(id) {
        return feeds.$remove(id);
      }

    };
  });
