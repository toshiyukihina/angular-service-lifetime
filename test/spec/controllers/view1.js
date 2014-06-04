'use strict';

describe('Controller: View1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularServiceLifetimeApp'));

  var View1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    View1Ctrl = $controller('View1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
