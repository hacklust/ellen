'use strict';

angular.module('ellenApp')
  .controller('FinalCtrl', function ($scope, questions, answers, articles, comments, user) {
    $scope.auth = user.getAuth();

  });
