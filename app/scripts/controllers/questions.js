'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService) {
    
    $scope.question = '';
    $scope.categories = [
      'general',
      'lifestyle',
      'health',
      'news',
      'entertainment',
      'family',
      'relationships',
      'education',
      'jobs',
      'violence'
    ];
    return {
      all: QuestionService.all,
      ask: function() {
        QuestionService.add($scope.question);
        $scope.question = '';
      }
    }
  });