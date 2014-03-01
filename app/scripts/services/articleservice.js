'use strict';

angular.module('ellenApp')
  .factory('ArticleService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/feeds');
    // get all questions
    var feed = $firebase(ref);

    return {
      all: feeds,
      add: function(article) {
        var user = UserService.getCurrent();

        article.created = Firebase.ServerValue.TIMESTAMP;
        article.author = {id: user.id, name: user.name};
        article.type = 'article';

        feeds.$add(article).then(function(ref){
          user.$child('articles').$child(ref.name()).$set({id: ref.name()});
        });
      },
      find: function(id) {
        console.log(id);
        return articles.$child(id);
      }
    };
  });
