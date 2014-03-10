'use strict';

angular.module('ellenApp')
  .controller('UserCtrl', function ($scope, $stateParams, UserService, FeedService) {
    $scope.user = UserService.findById($stateParams.id);
    $scope.url = '#/users/' + $stateParams.id;
    $scope.id = $stateParams.id;

    $scope.user.$on('loaded', function(ref){
      $scope.questions = [];
      $scope.answers = [];
      // fucking workaround
      if (ref === undefined) {
        angular.forEach($scope.user.question, function(q){
          $scope.questions.push(FeedService.findById(q.id));
        });

        angular.forEach($scope.user.answers, function(a){
          var question = FeedService.findById(a.questionId);
          $scope.answers.push(question.$child('answers').$child(a.id));
        });
      } else {
        angular.forEach(ref.question, function(q){
          $scope.questions.push(FeedService.findById(q.id));
        });

        angular.forEach(ref.answers, function(a){
          var question = FeedService.findById(a.questionId);
          $scope.answers.push(question.$child('answers').$child(a.id));
        });

      }
      
    });

    $scope.toggleMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };
    
    $scope.leftButtons = [
      {
        type: 'button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }
    ];
  });
