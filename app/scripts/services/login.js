'use strict';
angular.module('angularfire.login', ['firebase', 'angularfire.firebase'])

  .run(function(simpleLogin) {
    simpleLogin.init();
  })

  .factory('simpleLogin', function($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout) {
    function getPicURL(id, large) {
      return 'https://graph.facebook.com/' + (id) +
             '/picture/?type=' + (large ? 'large' : 'square') +
             '&return_ssl_resources=1';
    }

    function assertAuth() {
      if( auth === null ) {
        console.log(auth);
        console.log('null');
        throw new Error('Must call loginService.init() before using its methods');
      } else {
        console.log('not null');
      }
    }

    var auth = null;
    return {
      init: function() {
        auth = $firebaseSimpleLogin(firebaseRef());
        return auth;
      },

      logout: function() {
        assertAuth();
        auth.$logout();
      },

      /**
       * @param {string} provider
       * @param {Function} [callback]
       * @returns {*}
       */
      login: function(provider, callback) {
        // check if app is authorized, then login if yes
        console.log('assertauth');
        assertAuth();

        auth.$login(provider, {rememberMe: true}).then(function(user) {
          var userRef = firebaseRef('users/' + user.id);
          userRef.once('value', function(snapshot){
            var info = {};
            var val = snapshot.val();
            if (!val) {
              console.log('first time');
              // If this is a first time login, upload user details.
              info = {
                id: user.id,
                name: user.name,
                gender: user.gender,
                pic: getPicURL(user.id),
                dateRegistered: Firebase.ServerValue.TIMESTAMP
              };
              console.log('asa ilalim na nito yung set');
              userRef.set(info);
            } else {
              info = val;
              $rootScope.currentUser = info.id;
              console.log($rootScope.currentUser);
            }
          });
          if( callback ) {
            //todo-bug https://github.com/firebase/angularFire/issues/199
            $timeout(function() {
              
              callback(null, user);
            });
          }
        }, callback);
      }


    };
  });
