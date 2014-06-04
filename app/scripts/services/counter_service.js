'use strict';

angular.module('angularServiceLifetimeApp')
  .factory('CounterService', function () {
    var count = 0;
    return {
      increment: function() { count++; },
      decrement: function() { count--; },
      getCount: function () { return count; }
    };
  });
