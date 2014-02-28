'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, UserService, QuestionService, ArticleService, Auth, FeedService) {

    $scope.questions = QuestionService.all;
    $scope.articles = ArticleService.all;

    $scope.feeds = FeedService.all;

    $scope.article = '';
    $scope.question = '';
    
    $scope.toggleMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };
    
    $scope.leftButtons = [
      {
        type: 'button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
          $scope.toggleMenu();
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
