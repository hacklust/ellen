'use strict';

angular.module('ellenApp')
  .controller('AskCtrl', function ($scope, questions) {
    // collection
    $scope.questions = questions.all
    // single
    $scope.queston = {
      authorID: '',
      category: '',
      content: '',
      title: ''
    };
    $scope.ask = function () {
      questions.create($scope.question);
      
    };

    $scope.delete = function (id) {
      questions.delete(id);
    }
  });
