'use strict';

angular.module('ellenApp')
  .controller('ReportCtrl', function ($scope, $ionicModal, ReportService) {

    $scope.report = {};
    $scope.report.category = '';

    $scope.submitReport = function(isValid) {
      if (isValid) {
        ReportService.add($scope.report).then(function(){
          $scope.modal.hide();
          $scope.report= {};
        });
      };
    }


    $ionicModal.fromTemplateUrl('views/modals/report.modal.html', function(modal){
      $scope.modal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.openModal = function (cat, priority) {
      $scope.report.category = cat;
      $scope.report.priority = priority;
      $scope.report.type = cat;
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


    // ui ionic faggot
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
