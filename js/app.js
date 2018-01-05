'use strict';

var blogApp = angular.module('blogApp',[
	'ngRoute',
	'blogControllers',
	'services'
	]);

blogApp.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
			when('/user-list',{
				templateUrl: 'partials/main.html',
				controller:  'MainCtrl'
			}).when('/user-detail/:id', {
				templateUrl: 'partials/user-detail.html', 
				controller: 'UserDetailCtrl'
			}).when('/user-creation', {
				templateUrl: 'partials/user-creation.html', 
				controller: 'UserCreationCtrl'
			}).otherwise({
				redirectTo: '/user-list'
			});
			//$routeProvider.otherwise({redirectTo: '/user-list'});
		$locationProvider.html5Mode(false).hashPrefix('!');
}]);