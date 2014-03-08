'use strict';

angular.module('ellenApp')
  .factory('Auth', function ($rootScope, $firebaseSimpleLogin, firebaseRef) {

    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    function assertAuth () {
      if(auth === null) {
        throw new Error('Initialize the auth first');
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
      createAccount: function(email, pass, callback) {
        assertAuth();
        return auth.$createUser(email, pass);
      },
      isLoggedIn: function() {
        return auth.user !== null;
      }
    }

    Auth.init();

    return Auth;

  });
