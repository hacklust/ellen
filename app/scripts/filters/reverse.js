'use strict';

angular.module('ellenApp')
  .filter('reverse', function() {
    return function(items) {
      if(typeof items === 'object') {
        var array = [];
        for(var key in items){
          if(!items.hasOwnProperty(key)){
            continue;
          }
          items[key].name = key;
          array.push(key, items[key]);
        }
        return array.slice().reverse();
      }
      return items.slice().reverse();
    };
  });
