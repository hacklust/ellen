'use strict';

angular.module('ellenApp')
  .controller('UserCtrl', function ($scope, $stateParams, UserService, QuestionService, AnswerService) {
    $scope.user = UserService.findById($stateParams.id);
    $scope.url = '#/users/' + $stateParams.id;
    $scope.id = $stateParams.id;

    $scope.toggleMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };
    
    $scope.leftButtons = [
      {
        type: 'button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }
    ];
    
    $scope.answers = '';
    $scope.questions = '';

    $scope.user.$on('loaded', function(){
      console.log(Object.keys($scope.user.answers).length);
      $scope.answersCount = Object.keys($scope.user.answers).length;
      $scope.questionsCount = Object.keys($scope.user.questions).length;
      $scope.commentsCount = Object.keys($scope.user.comments).length;
      $scope.articlesCount = Object.keys($scope.user.articles).length;
    });
  });
