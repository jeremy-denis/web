 angular.module('directive')
	.directive('myTimer', myTimer);
	
function timerController($interval) {
	this.number = 0;
	this.stepTime = function () {
		number += 1;
	}
	
	this.init = function() {
		$interval(stepTime, 1000);
	}
	
	this.init();
}
	
function myTimer($interval) {
	return {
		replace:true,
		template:'{{number}}',
		controller: timerController
	}
}
