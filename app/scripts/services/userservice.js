'use strict';

angular.module('ellenApp')
  .factory('UserService', function () {
    var sdo = {
      isLoggedin: false,
      username: ''
    }

    return sdo;
  });
