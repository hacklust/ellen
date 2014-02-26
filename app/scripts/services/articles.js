'use strict';

angular.module('ellenApp')
  .factory('articles', function () {
    var ref = firebaseRef('/articles');
    var articles = $firebase(ref);
    return {
      all: function() {
        return articles;
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
