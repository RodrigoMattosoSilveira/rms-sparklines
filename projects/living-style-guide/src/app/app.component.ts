import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'living-style-guide';
  version =  `0.2.3`;
  sparklines = [
    {
      name: 'Inline',
      icon: '',
      routeLink: 'inline'
    },
    {
      name: 'Bar Chart',
      icon: '',
      routeLink: 'barchart'
    },
    {
      name: 'Boxplot Chart',
      icon: '',
      routeLink: 'boxplot'
    }
  ];
}
