'use strict';

describe('Service: AnswerService', function () {

  // load the service's module
  beforeEach(module('ellenApp'));

  // instantiate service
  var AnswerService;
  beforeEach(inject(function (_AnswerService_) {
    AnswerService = _AnswerService_;
  }));

  it('should do something', function () {
    expect(!!AnswerService).toBe(true);
  });

});
