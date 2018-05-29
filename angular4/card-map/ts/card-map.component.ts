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
	selected = 0;
	
	init(nbCard) {
		this.tours = new Array(nbCard);
		this.tours.fill({});
	}
	
	launchEvent($data) {
		this.selected = $data;
		this.events.publish('runViewed', $data);
	}
	
	ngOnInit(): void {
		this.init(this.leng);
    }
    
    constructor(public events: Events) {}
}

