/** angular form directive
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 (function() {
'use strict';

 angular.module('angularTheme',[]);
 angular.module('angularTheme')
	.directive('angularTheme', angularTheme)
	.controller('angularPresentationController',angularThemeController);

function angularThemeController($scope,$sce,$interval) {
	var vm  = this;
	vm.themeSelected;
			
	function changeTheme() {
		
	}	
}
	
function angularTheme() {
	return {
		replace:true,
		restrict:'E',
		scope: {
            themes: "="
        },
		controller: 'angularThemeController',
		controllerAs: 'ctrl',
		bindToController:true,
		template:'<select ng-model="ctrl.themeSelected"></select>',
	}
}

}());

		
