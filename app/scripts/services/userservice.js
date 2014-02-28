'use strict';

angular.module('ellenApp')
  .factory('UserService', function ($firebaseSimpleLogin, $firebase, firebaseRef, Auth, $rootScope) {
    var ref = firebaseRef('/users');
    var users = $firebase(ref);

    function findById(id) {
      var user = users.$child(id);
      return user;
    }

    function setCurrentUser(UserId) {
      $rootScope.currentUser = findById(UserId);
    }

    // persist on refresh....

    $rootScope.$on('$firebaseSimpleLogin:login', function () {
      var query = $firebase(ref);
      $rootScope.signedIn = $rootScope.currentUser !== null;
      query.$on('loaded', function () {
        setCurrentUser(query.$getIndex()[0]);
      });
    });

    return {
      findById: function(id) {
        var user = users.$child(id);
        return user;
      },
      getAuth: function() {
        return Auth.getAuth();
      },
      getCurrent: function() {
        return $rootScope.currentUser;
      },
      setCurrent: function(UserId) {
        $rootScope.currentUser = findById(UserId);
      },
      signedIn: function () {
        return $rootScope.currentUser !== undefined;
      },
      getAll: function() {
        return users;
      }
    };
  });
