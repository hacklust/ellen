'use strict';

angular.module('ellenApp')
  .controller('QuestionViewCtrl', function ($scope, $stateParams, QuestionService, UserService, CommentService, AnswerService) {
    // collection
    $scope.question = QuestionService.find($stateParams.id);
    $scope.id = $stateParams.id;
    $scope.url = '#/questions/' + $stateParams.id;
    $scope.answer = '';
    $scope.comment = '';

    // answer the question
    $scope.addAnswer = function() {
      AnswerService.add($scope.question, $stateParams.id, $scope.answer);
      $scope.answer = '';
    };

    $scope.removeAnswer = function(answer, answerId) {
      AnswerService.delete($scope.question, answer, answerId);
    };


    $scope.addComment = function(){
      CommentService.add($scope.question, $stateParams.id, $scope.comment);
      $scope.comment = '';
    };

    $scope.removeComment = function(comment, commentId) {
      CommentService.delete($scope.question, comment, commentId);
    };

  });
