'use strict';

describe('Controller: AskCtrl', function () {

  // load the controller's module
  beforeEach(module('ellenApp'));

  var AskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AskCtrl = $controller('AskCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
