'use strict';

describe('Controller: AnswerviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ellenApp'));

  var AnswerviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnswerviewCtrl = $controller('AnswerviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
