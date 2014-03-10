'use strict';

angular.module('ellenApp')
  .controller('QuestionsCtrl', function ($scope, QuestionService, FeedService) {

    $scope.feedType = 'Questions';

    $scope.feeds = [];

    $scope.questions = QuestionService.all;

    $scope.questions.$on('loaded', function(ref){
      angular.forEach(ref, function(q){
        $scope.feeds.push(FeedService.findById(q.id));
      });
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
