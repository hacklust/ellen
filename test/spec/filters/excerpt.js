'use strict';

describe('Filter: excerpt', function () {

  // load the filter's module
  beforeEach(module('ellenApp'));

  // initialize a new instance of the filter before each test
  var excerpt;
  beforeEach(inject(function ($filter) {
    excerpt = $filter('excerpt');
  }));

  it('should return the input prefixed with "excerpt filter:"', function () {
    var text = 'angularjs';
    expect(excerpt(text)).toBe('excerpt filter: ' + text);
  });

});
