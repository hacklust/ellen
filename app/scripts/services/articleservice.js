'use strict';

angular.module('ellenApp')
  .factory('ArticleService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/articles');
    // get all questions
    var articles = $firebase(ref);

    return {
      all: articles,
      add: function(article) {
        var user = UserService.getCurrent();

        article.created = Firebase.ServerValue.TIMESTAMP;
        article.author = {id: user.id, name: user.name};

        articles.$add(article).then(function(ref){
          user.$child('articles').$child(ref.name()).$set({id: ref.name()});
        });
      }
    };
  });
