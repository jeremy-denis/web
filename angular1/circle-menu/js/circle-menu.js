(function() {
    'use strict';
    
	angular.module('CircleMenu')
		.component("circleMenu", {
			 bindings: {
			  opened: '=',
			  items: '='
			},
			controller:circleMenuCtrl,
			templateUrl:"scripts/components/circle-menu/circle-menu.html"
		});

	function circleMenuCtrl($rootScope, $stateParams,$ionicPopup,IndexdbService,$filter) {
		var vm = this;
		vm.opened = false;
		
		vm.open = open;
		vm.items = [];
		vm.posItems = [];
		vm.launchEvent = launchEvent;
		
		function open() {
			vm.opened = !vm.opened;
			init();
		}
		
		init();
		
		function launchEvent($data,event) {
			$rootScope.$emit(event,$data);
		}
		
		function init() {
			vm.posItems = [];
			
			var angle = 20;
			var prev = {};
			
			for(var i = 0, l = vm.items.length; i < l; i++) {
				var tmp = {};
				tmp.lef = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
				tmp.left = tmp.lef + '%';
				
				tmp.to = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
				tmp.top = tmp.to + '%';
				
				vm.posItems.push(tmp);
			}
		}
 
	};
})();
