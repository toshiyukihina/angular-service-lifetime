'use strict';

angular
  .module('angularServiceLifetimeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/view1', {
        templateUrl: 'views/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'views/view2.html',
        controller: 'View2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
