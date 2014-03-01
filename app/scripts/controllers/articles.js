'use strict';

angular.module('ellenApp')
  .controller('ArticlesCtrl', function ($scope, ArticleService, FeedService) {

    $scope.article ={};

    $scope.write = function() {
      ArticleService.add($scope.article);
      $scope.article ={};
    }

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
