'use strict';

angular.module('ellenApp')
  .factory('Auth', function ($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout) {

    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    function assertAuth() {
      if( auth === null ) {
        throw new Error('Initialize first this service');
      }
    }

    var Auth = {
      init: function() {
        return auth;
      },
      login: function(user) {
        assertAuth();
        return auth.$login('password', user);
      },
      logout: function() {
        assertAuth();
        return auth.$logout();
      },

      createAccount: function(user) {
        assertAuth();
        return auth.$createUser(user.email, user.password);
      },
      isLoggedIn: function() {
        return auth.user !== null;
      }
    }

    Auth.init();

    return Auth;

  });
