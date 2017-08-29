/** angular form component
 * @file 06/05/2016
 * @author Jérémy DENIS
 * @descrition component that change a standard json into a form component
 * @license MIT
 * @version 1.0
 */
 
 angular.module('angularForm',[]);
 angular.module('angularForm')
	.component('angularForm',{
		bindings: {
            object: "=?"
		},
		controller:angularFormController,
		controllerAs:'ctrl',
		template:'<div ng-bind-html="ctrl.form"></div>'
	});
	
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

