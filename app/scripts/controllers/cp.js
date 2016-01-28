'use strict';

/**
 * @ngdoc function
 * @name todoapp.controller:cpCtrl
 * @description
 * # cpCtrl
 * Controller of the todoapp
 */
angular.module('todoapp')
  .controller('cpCtrl', function ($scope, $stateParams, Notification, crudService, $state) {
    $scope.objectID = $stateParams.objectID;
    $scope.allObjects = {};
    $scope.currentObject = {};
    crudService.getOperation().then(function(response){
    	$scope.allObjects = response.data.results;
    	angular.forEach($scope.allObjects, function(obj){
            if(obj['objectId'] === $scope.objectID){
                $scope.currentObject = angular.copy(obj);
            }
		});
    });
    $scope.updateMe = function(){
        $scope.currentObject.phone = Number(angular.copy($scope.currentObject.phone));
        crudService.putOperation(angular.toJson($scope.currentObject), $scope.objectID).then(function(response){
            if(response.status === 200){
                Notification.success("Passwpord Changed successfully");
                $state.go("get");
            }else{
                Notification.error("An error occurred. Please try again!");
            }
        });
    };
  });
