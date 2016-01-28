'use strict';

/**
 * @ngdoc function
 * @name todoapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoapp
 */
angular.module('todoapp')
  .controller('MainCtrl', function ($scope, crudService, DTOptionsBuilder, DTColumnDefBuilder, Notification, $state) {
  	$scope.crudList = {};
  	$scope.crudListData = {};
    $scope.crudList.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false)
		.withOption('bPaginate', false);
		
    $scope.crudList.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0).notSortable()
    ];	
	
	$scope.loadcrudList = function(){
		crudService.getOperation().then(function(response){
			$scope.crudListData = response.data;
		});
	};
	$scope.loadcrudList();
	$scope.deleteMe = function(objectID, index){
		if(window.confirm("Are you sure want to delete")){
			crudService.deleteOperation(objectID).then(function(response){
				if(response.status === 200){
					Notification.success("Deleted Successfully.");
					$scope.crudListData.results.splice(index,1);
				}else{
					Notification.error("An error occured. PLease try again!");
				}
			});
		}
	};
  });
