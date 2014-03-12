'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService, FeedService, $timeout) {

    $scope.feedType = 'Questions';

    $scope.feeds = [];
    $scope.questions = QuestionService.all;

    $scope.questions.$on('loaded', function(ref){
      if (ref === undefined) {
        angular.forEach($scope.questions.$getIndex(), function(key){
          $scope.feeds.push(FeedService.findById(key));
        });
      } else {
        angular.forEach(ref, function(a){
          $scope.feeds.push(FeedService.findById(a.id));
        });
      }

    })

    $scope.toggleMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };
    
    $scope.leftButtons = [
      {
        type: 'button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
          $scope.toggleMenu();
        }
      }
    ];

  });
