'use strict';

angular.module('ellenApp')
  .controller('EllenCtrl', function ($scope, chatbotService, UserService) {
    
    $scope.user = {};

    $scope.user.query = '';
    $scope.user.botid = '';

    $scope.conversation = [{
      type: 'response',
      content: "Hi there! I\'m Ellen. You can tell me anything."
    }];

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

    $scope.processRequest = function() {
      if ($scope.conversation.length > 0 &&
          $scope.conversation[$scope.conversation.length - 1].type === 'idle'
          ) {
             $scope.conversation.pop();
            }
      $scope.conversation.push({
        type: 'input',
        content: $scope.user.query
      }, {
        type: 'idle',
        content: 'Ellen is typing..'
      });

      // chatbot service
      chatbotService.sendMessage($scope)
        .then(function(result) {
          if ($scope.conversation.length > 0 &&
              $scope.conversation[$scope.conversation.length - 1].type === 'idle')
              {
                $scope.conversation.pop();
              }
          if (result.source === 'pandorabots') {
            if ($scope.user.botid === '') {
              $scope.user.botid = result.custid;
            }

            $scope.conversation.push({
              type: 'response',
              content: result.response
            });
          }
          else if (result.source === 'wolframalpha') {
            $scope.conversation.push({
              type: 'response',
              image: result.image,
              content: result.response
            });
          }

          //effin workaround 
           // > ?? what the hell???? -joey
          setTimeout(function() {
              $('.conversation').scrollTop($('.conversation')[0].scrollHeight + 500);
          }, 200);
      });
      $scope.user.query = '';
      $('#query').focus();
      //effin workaround 
       // > ?? what the hell???? -joey
       setTimeout(function() {
           $('.conversation').animate({scrollTop: $('.conversation')[0].scrollHeight + 500}, 200);
        }, 200);
    }

  });
