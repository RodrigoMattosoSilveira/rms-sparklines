import { Component } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'living-style-guide';
  // version =  `0.3.2-rc.1`;
   public appVersion: string = version;
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
      name: 'Bullet Chart',
      icon: '',
      routeLink: 'bulletchart'
    },
    {
      name: 'Inline',
      icon: '',
      routeLink: 'inline'
    },
  ];
}
