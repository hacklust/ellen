'use strict'

describe 'Controller: SecuredCtrl', () ->

  # load the controller's module
  beforeEach module 'ellenApp'

  SecuredCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    SecuredCtrl = $controller 'SecuredCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
