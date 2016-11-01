/** Timer directive
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 
 angular.module('angularForm',[]);
 angular.module('angularForm')
	.directive('angularForm', angularForm);
	
angular.module('angularForm')
	.controller('angularFormController',angularFormController);
	
	
function angularFormController($scope,$sce) {
	var vm = this;
	vm.form = '';
	
	this.init = function() {
		vm.form = '<table>'
		angular.forEach($scope.object, function(value, key) {
		  vm.form += '<tr><td>'+key+' : </td>';
		  vm.form += '<td><input type="text" value="'+value+'"/></td></tr>';
		});
		vm.form += '</table>';
		vm.form = $sce.trustAsHtml(vm.form);
	}
	
	this.init();
}
	
function angularForm() {
	return {
		replace:true,
		restrict:'E',
		scope: {
            object: "=object"
        },
		controller: 'angularFormController',
		controllerAs: 'ctrl',
		template:'<div ng-bind-html="ctrl.form"></div>',
	}
}
