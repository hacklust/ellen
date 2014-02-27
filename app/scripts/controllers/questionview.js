'use strict';

angular.module('ellenApp')
  .controller('QuestionViewCtrl', function ($scope, $stateParams, questions) {
    // collection
    console.log($stateParams);
    $scope.question = questions.find($stateParams.qid);
    $scope.url = '#/questions/' + $stateParams.qid;
  });
