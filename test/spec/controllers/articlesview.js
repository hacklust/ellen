'use strict';

describe('Controller: ArticlesviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ellenApp'));

  var ArticlesviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesviewCtrl = $controller('ArticlesviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
