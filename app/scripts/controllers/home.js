'use strict';

angular.module('ellenApp')
  .controller('HomeCtrl', function ($scope, $ionicModal, FeedService, VoteService,  $ionicLoading) {

    $scope.feedType = 'Home';

    // data
    $scope.feeds = FeedService.all;

    $scope.showLoading = function() {
      $scope.loading = $ionicLoading.show({
        content: 'Loading content. Please wait.<br><i class="ion-load-c"></i>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 100
      });
    };

    $scope.hideLoading = function() {
      $scope.loading.hide();
    };

    $scope.showLoading();

    $scope.feeds.$on('loaded', function(){
      $scope.hideLoading();
    });
    

    $scope.post = {};

    $scope.submitPost = function(isValid) {
      if (isValid) {
        // hard-coded  // article for web app only
        $scope.post.type = 'question';
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
        content: '<i class="icon ion-compose"></i>',
        tap: function(e) {
          $scope.modal.show();
        }
      }
    ]

    $scope.$on('$destroy', function(){
      $scope.modal.remove();
    });

    

  });
