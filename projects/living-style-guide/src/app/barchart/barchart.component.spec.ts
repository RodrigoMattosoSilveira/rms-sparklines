import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';

import { BarchartDualComponent } from './barchart-dual/barchart-dual.component';
import { BarchartNegativeComponent } from './barchart-negative/barchart-negative.component';
import { BarchartPositiveComponent } from './barchart-positive/barchart-positive.component';
import { BarchartTriComponent } from './barchart-tri/barchart-tri.component';


import { AngularMaterialModuleModule } from '../utils/angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          BarchartComponent,
          BarchartDualComponent,
          BarchartNegativeComponent,
          BarchartPositiveComponent,
          BarchartTriComponent,
       ],
       imports: [
           AngularMaterialModuleModule,
           BrowserAnimationsModule,
           RmstekSparklinesModule,
           HttpClientModule,
           MarkdownModule.forRoot({
               loader: HttpClient, // optional, only if you use [src] attribute
               markedOptions: {
                   provide: MarkedOptions,
                   useValue: {
                       gfm: true,
                       tables: true,
                       breaks: false,
                       pedantic: false,
                       sanitize: false,
                       smartLists: true,
                       smartypants: false,
                   },
               },
           }),
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
