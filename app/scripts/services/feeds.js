'use strict';

angular.module('ellenApp')
  .factory('feeds', function ($firebase, firebaseRef) {
    var ref = firebaseRef();

    return {
      getAll: function() {
        ref.child('questions').once('value', function(userSnap) {
          fb.child('answers').once('value', function(mediaSnap) {
              show( extend({}, userSnap.val(), mediaSnap.val()) );
          });
        });
      }
    }

  });
