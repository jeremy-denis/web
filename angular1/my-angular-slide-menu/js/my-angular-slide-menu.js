/** angular directive to create a slider menu
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 
 angular.module('myAngularSlideMenu',[]);
 angular.module('myAngularSlideMenu')
	.directive('myAngularSlideMenu', myAngularSlideMenu)
	.controller('myAngularSlideMenuController',myAngularSlideMenuController);
	
	
function myAngularSlideMenuController($scope) {
	var vm = this;
	vm.animated = false;
	vm.class='moveLeft';
}
	
function myAngularSlideMenu() {
	return {
		transclude:true,
		restrict:'E',
		scope: {
            class: "=?",
            animated:"=?"
        },
		controller: 'myAngularSlideMenuController',
		controllerAs: 'ctrl',
		bindToController:true,
		template:'<div id="my-angular-slide-menu" ng-class="{true:ctrl.class}[ctrl.animated]" ng-click="ctrl.animated=true;"><ng-transclude></ng-transclude>{{vm.animated}}</div>',
	}
}

