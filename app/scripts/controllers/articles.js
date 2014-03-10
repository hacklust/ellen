'use strict';

angular.module('ellenApp')
  .controller('ArticlesCtrl', function ($scope, ArticleService, FeedService) {
    
    $scope.feedType = 'Articles';

    $scope.feeds = [];
    $scope.articles = ArticleService.all;

    $scope.articles.$on('loaded', function(ref){
      // workaround
      if (ref === undefined) {
        angular.forEach(ref, function(a){
          console.log(a);
        });
      } else {
        angular.forEach(ref, function(a){
          $scope.feeds.push(FeedService.findById(a.id));
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
          $scope.toggleMenu();
        }
      }
    ];

  });
