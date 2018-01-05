'use strict';

var services = angular.module('services',['ngResource']);
services.factory('UsersFactory',['$resource',
	function($resource) {
		return $resource('http://localhost:3000/users',{},{
			get:{
				method:'GET',
				cache:true, 
				isArray:true,
				params:{}
			},
			create:{
				method:'POST'
			}
		});
}]);

services.factory('UserFactory', ['$resource',
	function ($resource) {
    return $resource('http://localhost:3000/users/:id', {}, {
        get:{
				method:'GET',
				cache:false, 
				isArray:false,
			},
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
}]);
