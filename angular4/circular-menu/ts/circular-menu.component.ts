import { Component, Input, OnInit } from '@angular/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'circular-menu',
  templateUrl: 'circular-menu.component.html',
})

export class CircularMenuComponent implements OnInit {
	@Input() opened:any;
	@Input() items:any;

	posItems;
	
	open() {
		this.opened = !this.opened;
		this.init();
	}
	
	launchEvent($data,event) {
		this.events.publish(event, $data);
	}
	
	init() {
		this.posItems = [];	
		
		for(let i = 0, l = this.items.length; i < l; i++) {
			let tmp:any = {};
			tmp.lef = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
			tmp.left = tmp.lef + '%';
			
			tmp.to = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
			tmp.top = tmp.to + '%';
			
			this.posItems.push(tmp);
		}
	}
	
	ngOnInit(): void {
		this.init();
    }
    
    constructor(public events: Events) {
		
    }
}

