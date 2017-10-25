import { Component, OnInit } from '@angular/core';
import { Review, ReviewService } from '../../../../shared/index';

@Component({
    selector: 'send',
    templateUrl: './send.component.html',
    host: {'(window:keydown)': 'hotkeys($event)',
           '(window:keyup)': 'clearkeys()'},
    styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
    model: Array<Review>;
    text: string = '';
    keys: Array<number>;
    private conkeys: Array<number> = [17, 13];

    hotkeys(event: any) {
        this.keys.push(event.keyCode);
        if (this.conkeys.indexOf(this.keys[0]) >= 0 && this.conkeys.indexOf(this.keys[1]) >= 0) {
           this.addMessage();
           this.conkeys = [];
        }
    }
    clearkeys() {
        this.keys = [];
        this.conkeys = [17, 13];
    }
    ngOnInit() {
    }

    addMessage() {
        let obj: Review = new Review();
        obj.name =  'Гость';
        obj.date = new Date( Date.now() );
        obj.text = this.text;
        this.service.addMessage(obj);
        this.text = '';
    }
    constructor(private service: ReviewService) { }

}
