'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the todoapp
 */
angular.module('todoapp')
  .controller('createCtrl', function ($scope, Notification, crudService) {
    $scope.newPerson = {
    	'name':'',
    	'phone':0,
    	'mail':'',
        'uname':'',
        'pass':'',
        'repass':'',
        'city':'',
    };
    $scope.create = function(){
    	$scope.newPerson.name = $scope.name;
    	$scope.newPerson.phone = Number($scope.phone);
        $scope.newPerson.mail = $scope.mail;
        $scope.newPerson.uname = $scope.uname;
        $scope.newPerson.pass = $scope.pass;
        $scope.newPerson.repass = $scope.repass;
        $scope.newPerson.city = $scope.city;
    	crudService.createOperation(angular.toJson($scope.newPerson)).then(function(response){
    		if(response.status === 201){
    			Notification.success("User created successfully.");
    			$scope.newPerson = {'name':'','phone':0,'mail':'','uname':'','pass':'','repass':'','city':''};
    		}else{
    			Notification.error("An error occured. Please try again.");
    		}
    	});
    };
  });
