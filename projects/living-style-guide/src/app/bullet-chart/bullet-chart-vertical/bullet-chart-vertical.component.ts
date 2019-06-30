import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullet-chart-vertical',
  templateUrl: './bullet-chart-vertical.component.html',
  styleUrls: ['./bullet-chart-vertical.component.css']
})
export class BulletChartVerticalComponent implements OnInit {
   className = '';
   height = 128;
   qualitativeRanges = JSON.parse(`[{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500 '}]`)
   width = 32;

  constructor() { }

  ngOnInit() {
  }

}
