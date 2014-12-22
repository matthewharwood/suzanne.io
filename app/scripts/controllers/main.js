'use strict';

/**
 * @ngdoc function
 * @name suzanneioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suzanneioApp
 */
var app = angular.module('suzanneioApp')
  .controller('MainCtrl', function ($scope, UI, Suzanne) {
    $scope.experiences = Suzanne.exp;
    $scope.memberships = Suzanne.memberships;
    $scope.awards = Suzanne.awards;
    $scope.isMenuOpen = UI.menu.status;
    $scope.$watch(
            function () { return UI.menu.status;},
            function (newVal) { 
                $scope.isMenuOpen = newVal;
            }
      );
    
  });
app.factory('UI', function(){
	var UI = {};

	UI.status = [];
    UI.menu = {
        status: false,
    };

	return UI;
});
app.directive('scrollSpyer', function ($window, UI) {
    return {
    	controller: function($scope){
    		$scope.ui = [];
    		this.expMapper = function(offset, height) {
    			$scope.ui.push({'offset': offset, 'height': height, 'inView': false});
    		};
    	},
    	link: function(scope) {
    		var i = 0;
	        angular.element($window).bind('scroll', function() {
	        	
	        	if(i < scope.ui.length){
	        		console.log(this.pageYOffset);
        			if (this.pageYOffset >= scope.ui[i].offset) {
                 		scope.boolChangeClass = true;
                 		UI.status.push(scope.ui[i].inView=true);
                 		console.log('boolif', scope.ui[i].offset);
                 		console.log('UI.status', UI.status);
                 		i++;
		            } else {
		            	console.log('middle');
		            }
	        	} else {

	        	}
    			

	            // console.log('boolif', scope.boolChangeClass, scope.experiences[i].offset);
	            scope.$apply();
	        });
	    }
	};
});

app.directive('spyed', function ($timeout) {
    return {
    	require: '^scrollSpyer',
    	link: function(scope, el, attrs, ctrl) {
    		$timeout(function(){
    			var offset = el[0].getBoundingClientRect().top;
			var theHeight = el[0].offsetHeight;
			ctrl.expMapper(offset, theHeight);	
    		},1000);
			
    		
	    }
	};
});

app.directive('inlineEdit', function() {
    return {
        restrict: 'EA',
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
        templateUrl: 'componentTpl.html',
        scope: {
            model: '@',
            version: '@',
            subcaption: '@'
          }
        };
  });
//http://stackoverflow.com/questions/27596385/how-to-get-correct-height-and-offset-values-of-an-element-when-using-ng-repeat