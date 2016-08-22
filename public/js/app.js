'use strict';

angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'partials/login',
    controller: LoginCtrl
  }).
  when('/dashboard', {
    templateUrl: 'partials/dashboard',
    controller: DashboardCtrl
  }).
  when('/altapura', {
    templateUrl: 'partials/altapura',
    controller: AltaPuraCtrl
  }).
  when('/altacomponente', {
    templateUrl: 'partials/altacomponente',
    controller: AltaPuraCtrl
  }).
  when('/migraciones', {
    templateUrl: 'partials/migraciones',
    controller: AltaPuraCtrl
  }).
  when('/categorias', {
    templateUrl: 'partials/categorias',
    controller: AltaPuraCtrl
  }).
  when('/monotv', {
    templateUrl: 'partials/monotv',
    controller: AltaPuraCtrl
  }).
  when('/sva', {
    templateUrl: 'partials/sva',
    controller: AltaPuraCtrl
  }).
  when('/svatv', {
    templateUrl: 'partials/svatv',
    controller: AltaPuraCtrl
  }).
  otherwise({
    redirectTo: '/login'
  });
  $locationProvider.html5Mode(true);
}]);