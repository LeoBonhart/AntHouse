import { Component, OnInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { Chart, ChartService } from '../../../../shared/index';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    public model: Array<Chart>;
    public count: number = 0;

    constructor(private service: ChartService) { }

    ngOnInit() {
        this.getServices();
    }
    private getServices() {
        this.service.getChart('chart.json').subscribe(x => {this.model = x; x.forEach(z => this.count += z.count)} );
    }
}
