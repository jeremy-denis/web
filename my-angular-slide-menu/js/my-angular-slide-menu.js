/** angular directive to create a slider menu
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 
 angular.module('myAngularSlideMenu',[]);
 angular.module('myAngularSlideMenu')
	.directive('myAngularSlideMenu', myAngularSlideMenu);
	
angular.module('myAngularSlideMenu')
	.controller('myAngularSlideMenuController',myAngularSlideMenuController);
	
	
function myAngularSlideMenuController($scope) {
	var vm = this;
	vm.left = false;
}
	
function myAngularSlideMenu() {
	return {
		transclude:true,
		restrict:'E',
		scope: {
            object: "="
        },
		controller: 'myAngularSlideMenuController',
		controllerAs: 'ctrl',
		bindToController:true,
		template:'<div id="my-angular-slide-menu" ng-class="ctrl.class" ng-click="ctrl.class = \'moveLeft\'"><ng-transclude></ng-transclude></div>',
	}
}

