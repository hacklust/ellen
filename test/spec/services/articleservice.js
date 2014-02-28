'use strict';

describe('Service: articleservice', function () {

  // load the service's module
  beforeEach(module('ellenApp'));

  // instantiate service
  var articleservice;
  beforeEach(inject(function (_articleservice_) {
    articleservice = _articleservice_;
  }));

  it('should do something', function () {
    expect(!!articleservice).toBe(true);
  });

});
