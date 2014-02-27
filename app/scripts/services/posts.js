'use strict';

angular.module('ellenApp')
  .factory('posts', function ($firebase, firebaseRef) {
    var ref = firebaseRef();


    return {
      create: function(post) {

      },
      read: function(id) {

      },
      update: function(id, params){

      },
      delete: function(id){

      }
    }
  });
