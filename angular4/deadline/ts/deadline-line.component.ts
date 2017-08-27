import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { OnInit } from '@angular/core';
import { Events } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'deadline-line',
  templateUrl: 'deadline-line.component.html',
})

export class DeadLineLineComponent implements OnInit {
	@Input() obj;
	now;
	dayDiff;
	
	ngOnInit() {
		let mom = moment.utc(this.obj.date);
		let day = mom.format('D');
		
		this.now = moment();
		let currDay = this.now.format('D');
		this.dayDiff = Math.round(this.now.diff(mom,'days',true));
	}
	
	confirmDelete() {
		let alert = this.alertCtrl.create({
		title: 'Confirm delete',
		message: 'Do you want to delete this line ?',
		buttons: [
		  {
			text: 'Cancel',
			role: 'cancel',
			handler: () => {
			  console.log('Cancel clicked');
			}
		  },
		  {
			text: 'Yes',
			handler: () => {
			  console.log('Delete clicked');
			  this.events.publish('articlesDeleted', this.obj);
			}
		  }
		]
	  });
	  alert.present();
	}

    constructor(public alertCtrl: AlertController,public events: Events) {
    
    }
}

