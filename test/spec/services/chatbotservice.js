'use strict';

describe('Service: ChatbotService', function () {

  // load the service's module
  beforeEach(module('ellenApp'));

  // instantiate service
  var ChatbotService;
  beforeEach(inject(function (_ChatbotService_) {
    ChatbotService = _ChatbotService_;
  }));

  it('should do something', function () {
    expect(!!ChatbotService).toBe(true);
  });

});
