'use strict';

angular.module('ellenApp')
  .factory('AnswerService', function ($firebase, UserService) {
    
    return {

      add: function(item, itemID, answer) {
        if (UserService.isLoggedIn()) {
          var user = UserService.getCurrent();
          answer.created = Firebase.ServerValue.TIMESTAMP;
          answer.author = {id: user.id, name: user.name, pic: user.pic};
          answer.questionId = itemID;

          item.$child('answers').$add(answer).then(function(ref){
            item.$child('answerCount').$transaction(function(count){
              if (!count) {
                return 1;
              }
              return count + 1;
            });
            user.$child('answers').$child(ref.name()).$set({id: ref.name(), questionId: itemID});
          });
        }
      },
      delete: function(item, itemID) {
        if (UserService.isLoggedIn()) {
          var user = UserService.getCurrent();
        }
      },
      find: function(item, answerID) {
        
      }
    }

  });
