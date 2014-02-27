'use strict';

angular.module('ellenApp')
  .factory('Auth', function ($rootScope, $firebaseSimpleLogin, firebaseRef) {
    
    var auth = $firebaseSimpleLogin(firebaseRef());
 
    return {
      register: function (user) {
        return auth.$createUser(user.email, user.password);
      },
      signedIn: function () {
        return $rootScope.currentUser !== null;
      },
      logout: function () {
        auth.$logout();
      },
      getAuth: function() {
        return auth;
      }
    };

  });
