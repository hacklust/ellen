'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, UserService, QuestionService, ArticleService, Auth) {

    $scope.questions = QuestionService.all;
    $scope.articles = ArticleService.all;

    $scope.article = '';
    $scope.question = '';
    
     $scope.rightButtons = [
      {
        type: 'button-clear',
        content: '<i class="icon ion-ios7-compose-outline"></i>',
        tap: function(e) {
          $scope.newQuestion();
        }
      }
    ];

    $scope.logout = function() {
      Auth.logout();
    };

    $scope.ask = function() {
      // the real thing 
      QuestionService.add($scope.question);
      // reset question
      $scope.question = '';
    };

    $scope.write = function() {
      ArticleService.add($scope.article);
    };

  });
