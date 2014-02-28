'use strict';

describe('Service: chatbotService', function () {

  // load the service's module
  beforeEach(module('ellenApp'));

  // instantiate service
  var chatbotService;
  beforeEach(inject(function (_chatbotService_) {
    chatbotService = _chatbotService_;
  }));

  it('should do something', function () {
    expect(!!chatbotService).toBe(true);
  });

});
