import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../shared/index';

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
    public like: number = 131;
    public messages: number = 14;

    public addLike() {
        this.like++;
    }

    ngOnInit() {
        this.service.getEmittedValue().subscribe( z => this.messages++)
    }
    constructor(private service: ReviewService) { }
}
