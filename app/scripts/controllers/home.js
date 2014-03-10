'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, $ionicModal, FeedService, VoteService) {

    // data
    $scope.feeds = FeedService.all;

    $scope.post = {};

    $scope.submitPost = function(isValid) {
      if (isValid) {
        // hard-coded  // article for web app only
        $scope.post.type = 'article';
        FeedService.add($scope.post).then(function(){
          $scope.modal.hide();
          $scope.post = {};
        });
      };
    }

    // modal / toggles

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

    $ionicModal.fromTemplateUrl('views/modals/post.modal.html', function(modal){
      $scope.modal =modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.openModal = function () {
      $scope.modal.show();
    }

    $scope.closeModal = function () {
      $scope.modal.hide();
    }

    $scope.rightButtons = [
      { 
        type: 'button-clear',
        content: '<i class="icon ion-ios7-compose-outline"></i>',
        tap: function(e) {
          $scope.modal.show();
        }
      }
    ]

    $scope.$on('$destroy', function(){
      $scope.modal.remove();
    });

  });
