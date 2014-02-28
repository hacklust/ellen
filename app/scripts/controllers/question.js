'use strict';

angular.module('ellenApp')
  .controller('QuestionCtrl', function ($scope, $stateParams, QuestionService, UserService, CommentService, AnswerService) {
    // collection
    $scope.currentQuestion = QuestionService.find($stateParams.id);
    $scope.id = $stateParams.id;
    $scope.url = '#/questions/' + $stateParams.id;
    $scope.answer = '';
    $scope.comment = '';

    $scope.question = '';

    $scope.ask = function() {
      QuestionService.add($scope.question);
    }

    // answer the question
    $scope.addAnswer = function() {
      AnswerService.add($scope.currentQuestion, $stateParams.id, $scope.answer);
      $scope.answer = '';
    };

    $scope.removeAnswer = function(answer, answerId) {
      AnswerService.delete($scope.currentQuestion, answer, answerId);
    };


    $scope.addComment = function(){
      CommentService.add($scope.currentQuestion, $stateParams.id, $scope.comment);
      $scope.comment = '';
    };

    $scope.removeComment = function(comment, commentId) {
      CommentService.delete($scope.currentQuestion, comment, commentId);
    };

  });