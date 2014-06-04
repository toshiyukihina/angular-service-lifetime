'use strict';

describe('Controller: View2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularServiceLifetimeApp'));

  var View2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    View2Ctrl = $controller('View2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
