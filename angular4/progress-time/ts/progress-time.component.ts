/** Progress time component
 * @file 15/08/2017
 * @author Jérémy DENIS
 * @descrition : component that display a managable progress bar
 * @license MIT
 * @version 1.0
 */
 
import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Events } from 'ionic-angular';

@Component({
  selector: 'progress-time',
  templateUrl: 'progress-time.component.html',
})

export class ProgressTimeComponent {
	//id of the progress bar time
	@Input() id;
	
	//label display above the progress bar
	@Input() label;	
	
	// when it reach by the chrono an alert is throw
	@Input() maxTime;
	value;
	updateEach;
	inPause;

	//the chrono launch when the component is instanciated
    private timer;
    
    //the event subscription
    private sub: Subscription;
	
	updateTime(ticks): void {
		this.value += 1;
		if (this.value >= this.maxTime) {
			this.end();
			this.postpone();
		}
    }
    
    pause() {
		this.inPause = !this.inPause;
		if (this.sub == undefined) {
			this.timer   = Observable.timer(1000,1000);
			this.sub     = this.timer.subscribe(t => this.updateTime(t));
		} else {
			this.end();
			this.sub = undefined;
		}
    }
    
    end() {
        this.sub.unsubscribe();
    }
    
    postpone() {
		this.events.publish('progressEnded', this);
    }
    
    constructor(public events: Events) {
		this.inPause = false;
		this.value   = 0;
		this.timer   = Observable.timer(1000,1000);
		this.sub     = this.timer.subscribe(t => this.updateTime(t));
    }
}

