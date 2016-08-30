/** angular form directive
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
	
	
function angularPresentationController($scope,$sce) {
	var vm    = this;
	var cpt   = 0;
	vm.result = '';
	
	this.init = function() {
		if (vm.presentation.displayNumber == 'all') {
			vm.presentation.displayNumber = vm.presentation.slides.length;
		}
		
		angular.forEach(vm.presentation.slides,function(list){
			if (cpt < vm.presentation.displayNumber) {
				vm.result += '<div class="'+vm.presentation.slideClass+'">';
				vm.result += '<div class="'+vm.presentation.titleClass+'">'+list.name+'</div>';
				angular.forEach(list.values,function(item){
					vm.result += '<div class="'+vm.presentation.itemClass+'">'+item+'</div>';
				});
				vm.result += '</div>';
				++cpt;
			}
		});
		vm.result = $sce.trustAsHtml(vm.result);
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
