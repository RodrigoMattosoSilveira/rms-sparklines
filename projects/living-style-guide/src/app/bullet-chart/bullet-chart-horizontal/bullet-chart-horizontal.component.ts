import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullet-chart-horizontal',
  templateUrl: './bullet-chart-horizontal.component.html',
  styleUrls: ['./bullet-chart-horizontal.component.css']
})
export class BulletChartHorizontalComponent implements OnInit {
   className = '';
   height = 32;
   qualitativeRanges = JSON.parse(`[{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500 '}]`)
   width = 128;

  constructor() { }

  ngOnInit() {
  }

}
