'use strict';

angular.module('ellenApp')
  .factory('Auth', function ($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout, UserService) {
    
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
      logout: function() {
        assertAuth();
        return auth.$logout();
      },
      signedIn: function () {
        return auth.user !== null;
      },

      register: function(user) {
        return auth.$createUser(user.email, user.password);
      },

      login: function(user) {
        return auth.$login('password', user);
      }
      // login with facebook as provider
      // login: function(provider, callback){
      //   // here it comes
      //   assertAuth()
      //   auth.$login(provider, {rememberMe : true}).then(function(user){
      //     var userRef = firebaseRef('users/' + user.id);
      //     userRef.once('value', function(snapshot){
      //       var val = snapshot.val();
      //       // if user already exists
      //       console.log('echoing val');
      //       if(!val) {
      //         console.log('first time user');
      //         UserService.create(user)
      //       } else {

      //         console.log('returning user');
      //         console.log(user.id);
      //         UserService.setCurrent(user.id);
      //       }
      //     })
      //   });
      // }
    }


    Auth.init();
    return Auth;
  })