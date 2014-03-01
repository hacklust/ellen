'use strict';

angular.module('ellenApp')
  .factory('QuestionService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/feeds');
    // get all questions
    var feeds = $firebase(ref);

    return {
      all: feeds,
      add: function(question, category) {
        var user = UserService.getCurrent();

        question.created = Firebase.ServerValue.TIMESTAMP;
        question.author = {id: user.id, name: user.name, pic: user.pic};
        question.category = category;
        question.type = 'question';
        
        feeds.$add(question).then(function(ref){
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
