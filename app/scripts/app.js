'use strict';

/**
 * @ngdoc overview
 * @name todoapp
 * @description
 * # todoapp
 *
 * Main module of the application.
 */
angular
  .module('todoapp', [
  	'config',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
	'LocalStorageModule',
    'ngTouch',
    'ui.bootstrap',
	'angularMoment',
    'restmod',
	'ui-notification',
    'dibari.angular-ellipsis',
    'datatables',
	'frapontillo.bootstrap-switch',
	'angular-loading-bar',
	'angularjs-dropdown-multiselect',
    'ngAnimate',
    'ngCsvImport',
    'ngFileUpload'
 ])
   .config(function($stateProvider, $urlRouterProvider, $httpProvider, restmodProvider, $locationProvider){
       restmodProvider.rebase({
           $extend:{
               Model: {
 				  encodeUrlName: function(name){return name;}
               }
           }
       });
   //$locationProvider.html5Mode(true).hashPrefix('!');
   // For any unmatched url, redirect to /state1
   $urlRouterProvider.otherwise('/home');

   // Now set up the states
   $stateProvider



     .state('home', {
       views : {
         contentView : {templateUrl: 'views/main.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'Home'},
       url: '/home'
     })


     .state('get', {
       views : {
         contentView : {templateUrl: 'views/get.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'Get & Delete'},
       url: '/get'
     })



     .state('create', {
       views : {
         contentView : {templateUrl: 'views/create.html', controller:'createCtrl'}
       },
       data: {pageTitle: 'Create'},
       url: '/create'
     })


     .state('put', {
       views : {
         contentView : {templateUrl: 'views/put.html', controller:'putCtrl'}
       },
       data: {pageTitle: 'Put'},
       url: '/put/:objectID'
     })



.state('view', {
       views : {
         contentView : {templateUrl: 'views/view.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'view'},
       url: '/view'
     })



     .state('edit', {
       views : {
         contentView : {templateUrl: 'views/edit.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'edit'},
       url: '/edit'
     })


     .state('delete', {
       views : {
         contentView : {templateUrl: 'views/delete.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'delete'},
       url: '/delete'
     })
.state('upload', {
       views : {
         contentView : {templateUrl: 'views/upload.html', controller:'MainCtrl'}
       },
       data: {pageTitle: 'upload'},
       url: '/upload'
     })

  }).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.post['X-Parse-Application-ID'] = 'EmXRP2Flx726GN8w8qQiTNPpxlsftnRGmtsAfqFq';
        $httpProvider.defaults.headers.post['X-Parse-REST-API-Key'] = '7Eva1xMrSACL7gYYg5cGpvWamwdBHDk8oDgnMZ84';
    }
 ]).run(function($http){
 	$http.defaults.headers.common['X-Parse-Application-ID'] = 'EmXRP2Flx726GN8w8qQiTNPpxlsftnRGmtsAfqFq';
 	$http.defaults.headers.common['X-Parse-REST-API-Key'] = '7Eva1xMrSACL7gYYg5cGpvWamwdBHDk8oDgnMZ84';
 });
