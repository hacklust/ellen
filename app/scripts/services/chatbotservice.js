'use strict';

angular.module('ellenApp')
  .factory('chatbotService', function ($http) {
    return {
      sendMessage: function(obj) {
        return $http({
          url: 'http://www.nelonoel.com/app/bot.php',
          data: {
            'action': 'query',
            'custid': obj.user.botid,
            'query': obj.user.query
          },
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).error(function(err) {
          obj.conversation.pop();
          obj.user.query = obj.conversation.pop().content;
          obj.conversation.push({
            type: 'idle',
            content: 'You\'re offline. Message not sent.'
          });
        }).then(function(result) {
          return result.data;
        });
      }
    };
  });
