'use strict';

angular.module('ellenApp')
    
    $scope.user = {};

    $scope.user.query = '';
    $scope.user.botid = '';


    $scope.conversation = [{
      type: 'response',
      content: 'Hi there! I\'m Ellen. You can tell me anything.'
    }];

    $scope.send = function() {
      if ($scope.conversation.length > 0 &&
          $scope.conversation[$scope.conversation.length - 1].type === 'idle') {
        $scope.conversation.pop();
      }
      $scope.conversation.push({
        type: 'input',
        content: $scope.user.query
      }, {
        type: 'idle',
      });

      ChatbotService.send($scope).then(function(result) {
        if ($scope.conversation.length > 0 &&
          $scope.conversation[$scope.conversation.length - 1].type === 'idle') {
          $scope.conversation.pop();
        }
        if (result.source === 'pandorabots') {
          if ($scope.user.botid === '') {
            $scope.user.botid = result.custid;
          }
          $scope.conversation.push({
            type: 'response',
            content: result.response
          })
        } else if (result.source === 'wolframalpha') {
          $scope.conversation.push({
            type: 'response',
            image: result.image,
            content: result.response
          });
        }
      });
      $scope.user.query = '';
    }

  });
