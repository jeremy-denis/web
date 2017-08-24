/** Timer directive
 * @file 02/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */

/** The following function match to the timer component itself 
 * @constructor
 */	
 angular.module('myTimer',[]);
 angular.module('myTimer')
	.component('myTimer',{
		bindings: {
            duration: "@duration",
            min: "=?",
            max: "=?",
			step: "=?",
			desc: "=?"
		},
		controller:timerController,
		controllerAs:'ctrl',
		template:'<div>{{ctrl.number}}</div>'
	});
	
/** The following function match to the controller of the timer directive 
 * @constructor
 * @param $interval : injection of the interval service for increment the timer
 * @param scope : 
 */
function timerController($interval,$scope,$rootScope) {
	var vm = this;
	vm.number = 0;
	vm.timer;
	vm.step = 1;
	
	vm.stop = function () {
		$interval.cancel(vm.timer);
		$rootScope.$emit('timerStop');
	}
	
	this.stepTime = function ($scope) {
		vm.number += vm.step;
	
		if (isNaN(vm.number)) {
			vm.stop();
		}
		
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

