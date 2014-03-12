'use strict';

angular.module('ellenApp')
  .factory('ReportService', function ($firebase, firebaseRef, UserService) {
    
    var ref = firebaseRef();
    var fb = $firebase(ref);
    var reports = fb.$child('reports');
    var stats = fb.$child('report_stats');

    return {
      add: function(report) {
        var user = UserService.getCurrent();
        report.dateCreated = Firebase.ServerValue.TIMESTAMP;
        report.reporter = {id: user.id, name: user.name, pic: user.pic};

        return reports.$add(report).then(function(ref){
          reports.$child(ref.name()).$child('id').$set(ref.name());
          user.$child('reports').$child(ref.name()).$set({id: ref.name()});

          stats.$child(report.priority).$transaction(function(count){
            if (count === undefined || count === null) {
              return 1;
            };

            return count + 1;
          });
        })
      }
    }

  });
