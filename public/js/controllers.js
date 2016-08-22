'use strict';

function IndexCtrl($scope, $http) {

}

function LoginCtrl($scope, $http, $location, $routeParams) {
	$scope.login = function(){
		$location.path('/dashboard');
	}
}

function DashboardCtrl($scope, $http, $location, $routeParams) {

}

function AltaPuraCtrl($scope, $http, $location, $routeParams) {

}