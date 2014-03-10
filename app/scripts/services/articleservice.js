'use strict';

angular.module('ellenApp')
  .factory('ArticleService', function ($firebase, firebaseRef) {

    var ref = firebaseRef('/types/article');
    // get all questions
    var articles = $firebase(ref);

    return {
      all: articles
    }
  });
