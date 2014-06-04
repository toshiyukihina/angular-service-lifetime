'use strict';

angular.module('angularServiceLifetimeApp')
  .controller('View1Ctrl', ['$scope', '$location', 'CounterService', function ($scope, $location, CounterService) {
    $scope.count = CounterService.getCount();
    $scope.increment = function() {
      CounterService.increment();
      $scope.count = CounterService.getCount();
    };
    $scope.decrement = function() {
      CounterService.decrement();
      $scope.count = CounterService.getCount();
    };
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
