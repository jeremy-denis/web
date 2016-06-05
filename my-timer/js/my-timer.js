/** Timer directive
 * @file 02/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */

 angular.module('myTimer',[]);
 angular.module('myTimer')
	.directive('myTimer', myTimer);
	
angular.module('myTimer')
	.controller('timerController',timerController);
	
/** The following function match to the controller of the timer directive 
 * @constructor
 * @param $interval : injection of the interval service for increment the timer
 * @param scope : 
 */
function timerController($interval,$scope) {
	var vm = this;
	vm.number = 0;
	vm.timer;
	vm.step = 1;
	vm.max;
	vm.min;
	vm.desc;
	
	vm.stop = function () {
		$interval.cancel(vm.timer);
	}
	
	this.stepTime = function ($scope) {
		vm.number += vm.step;

		if (vm.max != undefined && vm.max <= vm.number) {
			vm.number = vm.max;
			vm.stop();
		}
		
		if (vm.desc != undefined && vm.min != undefined && vm.min >= vm.number) {
			vm.number = vm.min;
			vm.stop();
		}
	}
	
	this.init = function() {
		if (vm.duration == undefined) {
			vm.duration = 1000;
		}
		
		if (vm.min != undefined) {
			vm.number = vm.min;
		}
		
		if (vm.desc) {
			if (vm.max != undefined) {
				vm.number = vm.max;
			}
			vm.step *= -1;
		}

		this.timer = $interval(this.stepTime, vm.duration);
		
		$scope.$on('$destroy', function() {
		  $scope.stop();
		});
	}
	
	this.init();
}

/** The following function match to the timer directive itself 
 * @constructor
 */	
function myTimer($interval) {
	return {
		replace:true,
		scope: {
            duration: "@duration",
            min: "=",
            max: "=",
			step: "=",
			desc: "="
        },
		controller: 'timerController',
		controllerAs: 'ctrl',
		bindToController: true,
		template:'<div>{{ctrl.number}}{{1+1+1}}</div>',
	}
}

