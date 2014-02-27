'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, questions, answers, comments, user) {

    $scope.questions = questions.all;
    $scope.question = '';

    $scope.ask = function() {
      console.log(user.getCurrent());
      var q = user.findById('1634354692');
      // need on loaded for console.log, coz it's way too fast
      q.$on('loaded', function() {
        console.log(q.id);
      });
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
