'use strict';

angular.module('ellenApp')
  .controller('UserCtrl', function ($scope, $stateParams, UserService, FeedService) {
    $scope.user = UserService.findById($stateParams.id);
    $scope.url = '#/users/' + $stateParams.id;
    $scope.id = $stateParams.id;

    $scope.user.$on('loaded', populateSubmissions);

    function populateSubmissions () {
      $scope.questions = {};

      angular.forEach($scope.user.questions, function(qid){
        $scope.questions[qid] = FeedService.find(qid);
      });
    }

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
