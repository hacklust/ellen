'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService) {
    
    $scope.question = {};
    $scope.ask = function () {
      QuestionService.add($scope.question);
      $scope.question = '';
    }
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

  });