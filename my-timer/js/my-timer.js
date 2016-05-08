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
		if ($scope.duration == undefined) {
			$scope.duration = 1000;
		}
		
		if ($scope.max != undefined) {
			vm.max = $scope.max;
		}
		
		if ($scope.min != undefined) {
			vm.min = $scope.min;
			vm.number = $scope.min;
		}
		
		if ($scope.step != undefined) {
			vm.step = $scope.step;
		}
		
		if ($scope.desc) {
			if (vm.max != undefined) {
				vm.number = vm.max;
			}
			vm.desc = $scope.desc;
			vm.step *= -1;
		}

		this.timer = $interval(this.stepTime, $scope.duration);
		
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
            min: "=min",
            max: "=max",
			step: "=step",
			desc: "=desc"
        },
		controller: 'timerController',
		controllerAs: 'ctrl',
		template:'<div>{{ctrl.number}}{{1+1+1}}</div>',
	}
}

