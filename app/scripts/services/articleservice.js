'use strict';

angular.module('ellenApp')
  .factory('ArticleService', function ($firebase, firebaseRef, UserService) {
    // ref questions
    var ref = firebaseRef('/feeds');
    // get all questions
    var feeds = $firebase(ref.startAt('article').endAt('article'));

    return {
      all: feeds,
      add: function(article) {
        var user = UserService.getCurrent();

        article.created = Firebase.ServerValue.TIMESTAMP;
        article.author = {id: user.id, name: user.name, pic: user.pic};
        article.score = 0;
        article.type = 'article';

        feeds.$add(article).then(function(ref){
          ref.setPriority(Date.now());
          ref.setPriority('article');
          user.$child('articles').$child(ref.name()).$set({id: ref.name()});
        });
      },
      find: function(id) {
        console.log(id);
        return feeds.$child(id);
      }
    };
  });
