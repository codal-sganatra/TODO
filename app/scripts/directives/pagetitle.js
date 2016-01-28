'use strict';

/**
 * @ngdoc directive
 * @name todoapp.directive:pageTitle
 * @description
 * # pageTitle
 */
angular.module('todoapp')
  .directive('updateTitle', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
      return {
        link: function(scope, element) {

          var listener = function(event, toState) {

            var title = 'TODO APP';
            if (toState.data && toState.data.pageTitle){
              title = toState.data.pageTitle;
            }

            $timeout(function() {
              element.text(title);
            }, 0, false);
          };

          $rootScope.$on('$stateChangeSuccess', listener);
        }
      };
    }
  ]);
