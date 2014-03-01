'use strict';

angular.module('ellenApp')
  .factory('FeedService', function ($firebase, firebaseRef, UserService) {
    // ref feeds
    var ref = firebaseRef('/feeds');
    // get all feeds
    var feeds = $firebase(ref);

    return {
      all: feeds
    };
  });
