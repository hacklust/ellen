'use strict';

angular.module('ellenApp')
  .factory('UserService', function ($firebase, firebaseRef, auth, $rootScope) {
    var ref = firebaseRef('/users');
    var users = $firebase(ref);
    var currentUser = {};

    return {
      findById: function(id) {
        var user = users.$child(id);
        return user;
      },
      getAuth: function() {
        return auth.getAuth();
      },
      getCurrent: function() {
        return auth.getAuth().user;
      },
      setCurrent: function(u) {
        currentUser = u;
      },
      signedIn: function () {
        return $rootScope.currentUser !== undefined;
      },
      getAll: function() {
        return users;
      }
    };
  });
