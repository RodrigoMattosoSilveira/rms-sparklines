import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {
  app_color: string = 'yellow';

  constructor() { }

  ngOnInit() {
  }

}
