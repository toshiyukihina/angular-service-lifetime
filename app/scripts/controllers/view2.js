'use strict';

angular.module('angularServiceLifetimeApp')
  .controller('View2Ctrl', ['$scope', 'CounterService', function ($scope, CounterService) {
    $scope.count = CounterService.getCount();
    $scope.increment = function() {
      CounterService.increment();
      $scope.count = CounterService.getCount();
    };
    $scope.decrement = function() {
      CounterService.decrement();
      $scope.count = CounterService.getCount();
    };
  }]);
