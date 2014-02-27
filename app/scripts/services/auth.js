'use strict';

angular.module('ellenApp')
  .factory('auth', function ($firebaseSimpleLogin, firebaseRef) {
    var auth=$firebaseSimpleLogin(firebaseRef());
    return {
      getAuth: function() {
        return auth;
      }
    }
  });
