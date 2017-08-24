/** angular presentation directive
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 (function() {
'use strict';

 angular.module('angularPresentation',[]);
 angular.module('angularPresentation')
	.directive('angularPresentation', angularPresentation)
	.controller('angularPresentationController',angularPresentationController);

function angularPresentationController($scope,$sce,$interval) {
	var vm    = this;
	var currentSlide   = 0;
	var stepLimit;
	var promise;
	vm.result;
	
			
	function oneStep() {
		vm.result = '';
		
		stepLimit = currentSlide + vm.presentation.displayNumber;
		
		if (stepLimit >= vm.presentation.slides.length) {
			$interval.cancel(vm.promise);
		}
		
		angular.forEach(vm.presentation.slides,function(list,key){
			if (key >= currentSlide && currentSlide < stepLimit) {
				vm.result += '<div class="'+vm.presentation.slideClass+'">';
				vm.result += '<div class="'+vm.presentation.titleClass+'"><div class="title">'+list.name+'</div><div class="'+vm.presentation.itemClass+'">';
				angular.forEach(list.values,function(item){
					vm.result += '<div class="item">'+item+'</div>';
				});
				vm.result += '</div></div>';
				++currentSlide;
			}
		});
		vm.result = $sce.trustAsHtml(vm.result);
	}	
	
	
	
	this.init = function() {
		if (vm.presentation.displayNumber == 'all') {
			vm.presentation.displayNumber = vm.presentation.slides.length;
		}
		
		if (vm.presentation.delay != undefined) {
			vm.promise = $interval(oneStep,vm.presentation.delay);
		}
		oneStep();
	}
	
	this.init();
}
	
function angularPresentation() {
	return {
		replace:true,
		restrict:'E',
		scope: {
            presentation: "="
        },
		controller: 'angularPresentationController',
		controllerAs: 'ctrl',
		bindToController:true,
		template:'<div ng-bind-html="ctrl.result"></div>',
	}
}

}());
