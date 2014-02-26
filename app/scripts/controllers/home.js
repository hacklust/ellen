'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, questions, answers, comments) {

    $scope.questions = questions.all();
    $scope.question = '';
    $scope.ask = function() {
      questions.add({
          author_id: '1634354692',
          title: 'some title',
          content: 'asfdfsadf',
          cat_id: 3
        });
    };

    $scope.get = function() {
      console.log(questions.get($scope.question));
    };

    $scope.answer = function() {
      answers.add({
        author_id: '1634354692',
        question_id: '-JGgdSzFhHFeXmL6yPIr',
        content: 'some answer on some question'
      });
    };

    $scope.getAnswers = function(qID) {  
      console.log(answers.get(qid));
    }
  });
