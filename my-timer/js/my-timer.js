 angular.module('myTimer',[]);
 angular.module('myTimer')
	.directive('myTimer', myTimer);
	
angular.module('directive')
	.controller('timerController',timerController);
	
	
function timerController($interval,$scope) {
	var vm = this;
	vm.number = 0;
	vm.timer;
	this.stepTime = function ($scope) {
		vm.number += 1;
	}
	
	this.init = function() {
		this.timer = $interval(this.stepTime, 1000);
	}
	
	this.init();
}
	
function myTimer($interval) {
	return {
		replace:true,
		scope: true,
		controller: 'timerController',
		controllerAs: 'ctrl',
		template:'<div>{{ctrl.number}}{{1+1+1}}</div>',
	}
}
