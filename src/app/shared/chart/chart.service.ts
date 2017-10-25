import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Chart } from './chart.model';


@Injectable()
export class ChartService {

    public getChart(path: string): Observable<Array<Chart>> {
        let advertisment = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return advertisment;
    }
    private parseJSON(response: Response):Array<Chart> {
        let res = response.json();
        let charts: Array<Chart> = new Array<Chart>();
        for (let item of res) {
            let chart = new Chart();
            chart.guid = item.guid;
            chart.name = item.name;
            chart.count = item.count;
            chart.color = item.color;
            charts.push(chart);
        }

        return charts;
    }

    constructor(private http: Http) {

    }
}
