'use strict';

angular.module('ellenApp')
  .factory('UserService', function ($firebaseSimpleLogin, $firebase, firebaseRef, $rootScope) {
    var ref = firebaseRef('/users');
    var users = $firebase(ref);

    function getPicURL(id, large) {
      return 'https://graph.facebook.com/' + (id) +
             '/picture/?type=' + (large ? 'large' : 'square') +
             '&return_ssl_resources=1';
    }

    function findById(id) {
      var user = users.$child(id);
      return user;
    }

    function setCurrentUser(userId) {
      $rootScope.currentUser = findById(userId);
    }

    // persist on refresh....

    $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
      var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid));
      console.log(authUser.uid);
      query.$on('loaded', function (snap) {
        console.log(query.$getIndex()[0]);
        setCurrentUser(query.$getIndex()[0]);
        // console.log($rootScope.currentUser !== undefined);
        // console.log(snap);
      });
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
      delete $rootScope.currentUser;
    });

    return {
      create: function(authUser, user) {
        users[authUser.id] = {
          id: authUser.id,
          name: user.name,
          md5_hash: authUser.md5_hash,
          pic: 'images/no_avatar.jpg',
          dateRegistered: Firebase.ServerValue.TIMESTAMP,
          $priority: authUser.uid
        }
        users.$save(authUser.id);
      },
      login: function(authUser) {
        users.$set({lastLoggedIn: Firebase.ServerValue.TIMESTAMP});
      },
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
