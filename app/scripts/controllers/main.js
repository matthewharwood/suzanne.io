'use strict';

/**
 * @ngdoc function
 * @name suzanneioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suzanneioApp
 */
var app = angular.module('suzanneioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.experiences = [
    	{
    		timeframe: '2011 – Present',
    		job: 'Marketing and Call Center / Dispatch Manager',
    		location: 'Mediastream – Waycross, Georgia',
    		list: [
    			{detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
    			{detail:'Call Center operations management including national Dispatch.'},
    			{detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
				{detail:'Develop and implement internal communications and training programs.'},
				{detail:'Work with management team to develop budget.'},
				{detail:'Evaluate financial reports to target areas of opportunity and growth.'}

    		]
    	},
    	{
    		timeframe: '2011 – Present',
    		job: 'Marketing and Call Center / Dispatch Manager',
    		location: 'Mediastream – Waycross, Georgia',
    		list: [
    			{detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
    			{detail:'Call Center operations management including national Dispatch.'},
    			{detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
				{detail:'Develop and implement internal communications and training programs.'},
				{detail:'Work with management team to develop budget.'},
				{detail:'Evaluate financial reports to target areas of opportunity and growth.'}

    		]
    	},
    	{
    		timeframe: '2011 – Present',
    		job: 'Marketing and Call Center / Dispatch Manager',
    		location: 'Mediastream – Waycross, Georgia',
    		list: [
    			{detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
    			{detail:'Call Center operations management including national Dispatch.'},
    			{detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
				{detail:'Develop and implement internal communications and training programs.'},
				{detail:'Work with management team to develop budget.'},
				{detail:'Evaluate financial reports to target areas of opportunity and growth.'}

    		]
    	},
    	{
    		timeframe: '2011 – Present',
    		job: 'Marketing and Call Center / Dispatch Manager',
    		location: 'Mediastream – Waycross, Georgia',
    		list: [
    			{detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
    			{detail:'Call Center operations management including national Dispatch.'},
    			{detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
				{detail:'Develop and implement internal communications and training programs.'},
				{detail:'Work with management team to develop budget.'},
				{detail:'Evaluate financial reports to target areas of opportunity and growth.'}

    		]
    	}

    ];
    // 
    $scope.wtf = function(evt) {
    	console.log('asdfasdf', evt);	
    	// element.scrollTop()
    };
    
  });
app.factory('Experiences', function(){
	var Experiences = {};
	Experiences.status = [];
	return Experiences;
});
app.directive('scrollSpyer', function ($window, Experiences) {
    return {
    	controller: function($scope){
    		$scope.experiences = [];
    		this.expMapper = function(offset, height) {
    			$scope.experiences.push({'offset': offset, 'height': height, 'inView': false});
    		};
    	},
    	link: function(scope) {
    		var i = 0;
	        angular.element($window).bind('scroll', function() {
	        	
	        	if(i < scope.experiences.length){
	        		console.log(this.pageYOffset);
        			if (this.pageYOffset >= scope.experiences[i].offset) {
                 		scope.boolChangeClass = true;
                 		Experiences.status.push(scope.experiences[i].inView=true);
                 		console.log('boolif', scope.experiences[i].offset);
                 		console.log('Experiences.status', Experiences.status);
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
    		},1000)
			
    		
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