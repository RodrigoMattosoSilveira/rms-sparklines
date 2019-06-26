import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartNegativeComponent } from './barchart-negative.component';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SparklinesModule } from 'sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BarchartNegativeComponent', () => {
  let component: BarchartNegativeComponent;
  let fixture: ComponentFixture<BarchartNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          BarchartNegativeComponent,
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
    fixture = TestBed.createComponent(BarchartNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
