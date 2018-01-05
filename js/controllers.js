'use strict';

var blogControllers = angular.module('blogControllers',[]);

blogControllers.controller('MainCtrl',['$scope','UsersFactory','UserFactory','$location',
	function MainCtrl ($scope,UsersFactory,UserFactory,$location) {

		 // callback for ng-click 'editUser':
        $scope.editUser = function (userId) {
            $location.path('/user-detail/' + userId);
        };
        // callback for ng-click 'deleteUser':
        $scope.deleteuser = function (userId) {
            UserFactory.delete({ id: userId });
            $scope.users = UsersFactory.get();
        };

        // callback for ng-click 'createUser':
        $scope.createNewUser = function () {
            $location.path('/user-creation');
        };


		UsersFactory.get({},
			function success(response){
				$scope.users = response;
			},function errorResponse(errorResponse){
				$scope.errorResponse = errorResponse;
			});

}]);

blogControllers.controller('UserDetailCtrl',['$scope','UserFactory','$routeParams','$location',
	function UserDetailCtrl($scope,UserFactory,$routeParams,$location){

		// callback for ng-click 'updateUser':
        $scope.updateUser = function () {
            UserFactory.update($scope.user);
            $location.path('/user-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/user-list');
        };

		$scope.user = UserFactory.get({id: $routeParams.id});

        $scope.userId = $routeParams.id;
        console.log($routeParams.id);
	}]);

blogControllers.controller('UserCreationCtrl',['$scope','UsersFactory','$location',
	function UserCreationCtrl($scope,UsersFactory,$location){
		$scope.createNewUser = function(){
			UsersFactory.create($scope.user);
			$location.path('/user-list');
		} 
	}]);
