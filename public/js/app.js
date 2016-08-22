'use strict';

angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/page1', {
    templateUrl: 'partials/page1',
    controller: Page1Ctrl
  }).
  when('/page2', {
    templateUrl: 'partials/page2',
    controller: Page2Ctrl
  }).
  otherwise({
    redirectTo: '/page1'
  });
  $locationProvider.html5Mode(true);
}]);