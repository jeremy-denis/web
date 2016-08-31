/** angular form directive
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition
 * @license MIT
 * @version 0.1
 */
 
 angular.module('angularForm',[]);
 angular.module('angularForm')
	.directive('angularForm', angularForm)
	.controller('angularFormController',angularFormController);
	
	
function angularFormController($scope,$sce) {
	var vm = this;
	vm.form = '';
	
	this.init = function() {
		vm.form = '<table>'
		angular.forEach(vm.object, function(value, key) {
		  vm.form += ['<tr><td>',key,' : </td>'].join("");
		  if (typeof value == 'string' || !value instanceof Array) {
				vm.form += ['<td><input name="',key,'" type="text" value="',value,'"/></td></tr>'].join("");
		  } else {
			if (value instanceof Array) {
				vm.form += ['<td><select name="',key,'">'].join("");
				angular.forEach(value, function(option) {
					vm.form += ['<option value="',option,'">',option,'</option>'].join("");
				});
				vm.form += '</select></td></tr>';
			}
		  }
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
            object: "="
        },
		controller: 'angularFormController',
		controllerAs: 'ctrl',
		bindToController:true,
		template:'<div ng-bind-html="ctrl.form"></div>',
	}
}

