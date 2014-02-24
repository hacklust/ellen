'use strict';

describe('Controller: SecuredCtrl', function () {

  // load the controller's module
  beforeEach(module('ellenApp'));

  var SecuredCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecuredCtrl = $controller('SecuredCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
