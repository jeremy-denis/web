import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Events } from 'ionic-angular';

@Component({
  selector: 'progress-time',
  templateUrl: 'progress-time.component.html',
})

export class ProgressTimeComponent {
	@Input() id;
	@Input() label;	
	@Input() maxTime;
	value;
	updateEach;
	inPause;

    private timer;
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

