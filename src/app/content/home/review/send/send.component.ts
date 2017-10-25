import { Component, OnInit } from '@angular/core';
import { Review, ReviewService } from '../../../../shared/index';

@Component({
    selector: 'send',
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
    model: Array<Review>;
    text: string = '';

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
