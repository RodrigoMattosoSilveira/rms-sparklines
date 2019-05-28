import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spark-line-simple',
    templateUrl: './spark-line-simple.component.html',
    styleUrls: ['./spark-line-simple.component.css']
})
export class SparkLineSimpleComponent implements OnInit {
    lineColor: string = 'yellow';

    constructor() { }

    ngOnInit() {}

}
