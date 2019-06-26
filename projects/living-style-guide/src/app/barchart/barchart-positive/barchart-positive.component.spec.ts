import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartPositiveComponent } from './barchart-positive.component';


import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SparklinesModule } from 'sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BarchartPositiveComponent', () => {
  let component: BarchartPositiveComponent;
  let fixture: ComponentFixture<BarchartPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          BarchartPositiveComponent
      ],
      imports: [
          AngularMaterialModuleModule,
          SparklinesModule,
          HttpModule,
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
    fixture = TestBed.createComponent(BarchartPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
