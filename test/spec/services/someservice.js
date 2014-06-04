'use strict';

describe('Service: SomeService', function () {

  // load the service's module
  beforeEach(module('angularServiceLifetimeApp'));

  // instantiate service
  var SomeService;
  beforeEach(inject(function (_SomeService_) {
    SomeService = _SomeService_;
  }));

  it('should do something', function () {
    expect(!!SomeService).toBe(true);
  });

});
