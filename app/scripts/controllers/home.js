'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, questions) {

    $scope.questions = questions.all();
    $scope.question = '';
    $scope.ask = function() {
      questions.add({author_id: '1634354692', title: 'some title', content: 'asfdfsadf', cat_id: 3});
    }

    $scope.get = function() {
      console.log(questions.get($scope.question));
    }

  });
