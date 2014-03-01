'use strict';

angular.module('ellenApp')
  .factory('UserService', function ($firebaseSimpleLogin, $firebase, firebaseRef, $rootScope, Auth) {
    var ref = firebaseRef('/users');
    var users = $firebase(ref);

    function findById(id) {
      var user = users.$child(id);
      return user;
    }

    function setCurrentUser(userId) {
      $rootScope.currentUser = findById(userId);
      
    }

    // persist on refresh....

    $rootScope.$on('$firebaseSimpleLogin:login', function () {
      var query = $firebase(ref);
      $rootScope.signedIn = $rootScope.currentUser !== null;
      query.$on('loaded', function () {
        console.log(Auth.getAuth());
        setCurrentUser(Auth.getAuth().user.id);
      });
    });

    return {
      findById: function(id) {
        var user = users.$child(id);
        return user;
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
