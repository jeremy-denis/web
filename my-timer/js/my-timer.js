 angular.module('myTimer',[]);
 angular.module('myTimer')
	.directive('myTimer', myTimer);
	
angular.module('myTimer')
	.controller('timerController',timerController);
	
	
function timerController($interval,$scope) {
	var vm = this;
	vm.number = 0;
	vm.timer;
	this.stepTime = function ($scope) {
		vm.number += 1;
	}
	
	this.init = function() {
		if ($scope.duration == undefined) {
			$scope.duration = 1000;
		}
		this.timer = $interval(this.stepTime, $scope.duration);
	}
	
	this.init();
}
	
function myTimer($interval) {
	return {
		replace:true,
		scope: {
            duration: "@duration"
        },
		controller: 'timerController',
		controllerAs: 'ctrl',
		template:'<div>{{ctrl.number}}{{1+1+1}}</div>',
	}
}

