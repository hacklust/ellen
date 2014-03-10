'use strict';

describe('Service: ArticleService', function () {

  // load the service's module
  beforeEach(module('ellenApp'));

  // instantiate service
  var ArticleService;
  beforeEach(inject(function (_ArticleService_) {
    ArticleService = _ArticleService_;
  }));

  it('should do something', function () {
    expect(!!ArticleService).toBe(true);
  });

});
