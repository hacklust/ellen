'use strict';

angular.module('ellenApp')
  .controller('MainCtrl', function ($scope, posts) {
    $scope.feeds = posts.getAll();

    $scope.create = function() {
      posts.createQuestion();
    }

    $scope.createUser = function() {
      UserService.create();
    }

    $scope.answer = function() {
      posts.createAnswer();
    }

    $scope.write = function() {
      posts.createArticle();
    }
  });
