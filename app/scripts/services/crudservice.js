'use strict';

/**
 * @ngdoc service
 * @name todoapp.crudService
 * @description
 * # crudService
 * Service in the todoapp.
 */
angular.module('todoapp')
  .service('crudService', function (apiEndpoint, $http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getOperation = function(){
		return $http.get(apiEndpoint+'1/classes/CRUBOBJ1');
	};
	this.putOperation = function(putData, objectID){
		return $http.put(apiEndpoint+'1/classes/CRUBOBJ1/'+objectID,putData);
	};
	this.deleteOperation = function(objectID){
		return $http.delete(apiEndpoint+'1/classes/CRUBOBJ1/'+objectID);
	};
	this.createOperation = function(newObject){
		return $http.post(apiEndpoint+'1/classes/CRUBOBJ1/',newObject);
	};
  });
