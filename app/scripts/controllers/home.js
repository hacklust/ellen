'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, UserService, QuestionService, Auth) {

    $scope.questions = QuestionService.all;
    $scope.question = '';

    $scope.logout = function() {
      Auth.logout();
    }

    $scope.ask = function() {
      // the real thing 
      QuestionService.create($scope.question);
      // reset question
      $scope.question = '';

      
      // testing below
      var query = QuestionService.find('-JGo8dEqooyAn4vGbbko');
      query.$on('loaded', function() {
        console.log(query.title);
      });

      var q = UserService.findById('1634354692');
      // need on loaded for console.log, coz it's way too fast
      q.$on('loaded', function() {
        console.log(q.id);
      });
    };

  });
