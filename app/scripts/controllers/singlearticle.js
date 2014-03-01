'use strict';

angular.module('ellenApp')
  .controller('SingleArticleCtrl', function ($scope, $stateParams, ArticleService) {

    $scope.article = ArticleService.find($stateParams.id);
    $scope.id = $stateParams.id;

    
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
