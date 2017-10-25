import { Component, OnInit } from '@angular/core';
import { Review, ReviewService } from '../../../../shared/index';

@Component({
    selector: 'visitors',
    templateUrl: './visitors.component.html',
    styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {
    model: Array<Review>;

    ngOnInit() {
        this.getServices();
        this.service.getEmittedValue().subscribe( z => this.model.push(z))
    }

    addReview(message: Review) {
        this.model.push(message);
    }

    private getServices() {
        this.service.getJson('reviews.json').subscribe(x => this.model = x );
    }

    constructor(private service: ReviewService) { }
}
