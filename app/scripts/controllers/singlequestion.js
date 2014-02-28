'use strict';

angular.module('ellenApp')
  .controller('SingleQuestionCtrl', function ($scope, $stateParams, QuestionService) {
    $scope.question = QuestionService.find($stateParams.id);
  });