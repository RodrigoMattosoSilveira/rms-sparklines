import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'living-style-guide';
  version =  `0.3.0`;
  sparklines = [
    {
      name: 'Bar Chart',
      icon: '',
      routeLink: 'barchart'
    },
    {
      name: 'Boxplot Chart',
      icon: '',
      routeLink: 'boxplot'
    },
    {
      name: 'Inline',
      icon: '',
      routeLink: 'inline'
    },
  ];
}
