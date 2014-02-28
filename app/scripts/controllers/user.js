'use strict';

angular.module('ellenApp')
  .controller('UserCtrl', function ($scope, $stateParams, UserService) {
    $scope.user = UserService.findById($stateParams.id);
    $scope.url = '#/users/' + $stateParams.id;
    $scope.id = $stateParams.id;
    $scope.user.$on('loaded', function(){
      console.log(Object.keys($scope.user.answers).length);
      $scope.answers = Object.keys($scope.user.answers).length;
      $scope.questions = Object.keys($scope.user.questions).length;
      $scope.comments = Object.keys($scope.user.comments).length;
      $scope.articles = Object.keys($scope.user.articles).length;

    });
  });
