'use strict';

angular.module('ellenApp')
  .factory('FeedService', function ($firebase, firebaseRef, UserService) {
    // ref feeds
    var ref = firebaseRef('/feeds');
    // get all feeds
    var feeds = $firebase(ref);

    return {
      all: feeds,
      add: function(feed) {
        var user = UserService.getCurrent();
        feed.created = Firebase.ServerValue.TIMESTAMP;
        feed.author = {id: user.id, name: user.name, pic: user.pic};

        feeds.$add(feed);

      },
      find: function(id) {
        return feeds.$child(id);
      },
      delete: function(id) {
        return feeds.$remove(id);
      }

    };
  });
