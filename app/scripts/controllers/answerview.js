'use strict';

angular.module('ellenApp')
  .controller('AnswerViewCtrl', function ($scope, $stateParams, AnswerService, UserService, CommentService) {
    $scope.questionId = $stateParams.qid;
    $scope.answerId = $stateParams.id;

    $scope.answer = AnswerService.find($scope.questionId, $scope.answerId);

    $scope.comment = '';

    // comments <3 
    $scope.addComment = function(){
      CommentService.add($scope.answer, $stateParams.id, $scope.comment);
      $scope.comment = '';
    }

    $scope.removeComment = function(comment, commentId) {
      CommentService.delete($scope.answer, comment, commentId);
    }

  });
