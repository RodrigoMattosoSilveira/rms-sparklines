import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.css']
})
export class BoxplotComponent implements OnInit {
  app_color: string = 'blue';

  constructor() { }

  ngOnInit() {
  }

}
