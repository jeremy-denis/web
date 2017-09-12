import { Component, Input, OnInit } from '@angular/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'card-map',
  templateUrl: 'card-map.component.html',
})

export class CardMapComponent implements OnInit {
	@Input() leng:any;
	@Input() active:any;
	tours;
	
	init() {
		this.tours = [];
		let cpt = 0;
		for (cpt;cpt < this.leng;cpt++) {
			this.tours.push({});
		}
	}
	
	launchEvent($data) {
		this.events.publish('runViewed', $data);
	}
	
	ngOnInit(): void {
		this.init();
    }
    
    constructor(public events: Events) {
		
    }
}

