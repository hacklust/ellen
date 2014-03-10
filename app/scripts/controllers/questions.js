'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService) {

    $scope.feeds = QuestionService.all;

  });
