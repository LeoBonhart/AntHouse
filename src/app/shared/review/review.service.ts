import { Injectable, Output, EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Review} from './review.model';



@Injectable()
export class ReviewService {

    public getJson(path: string): Observable<Array<Review>> {
        let featured = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return featured;
    }
    private parseJSON(response: Response): Array<Review> {
        let res = response.json();
        let reviews: Array<Review> = new Array<Review>();
        for (let item of res){
            let review = new Review();
            review.guid = item.guid;
            review.name = item.name;
            review.date = new Date(item.date);
            review.text = item.text;
            reviews.push(review);
        }
        return reviews;
    }

    // tslint:disable-next-line:member-ordering
    @Output() addReview: EventEmitter<Review> = new EventEmitter();

    addMessage(model: Review) {;
        this.addReview.emit(model);
    }
    getEmittedValue(): Observable<Review> {
        return this.addReview;
    }

    constructor(private http: Http) {
    }
}
