import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotComponent } from './boxplot.component';
import { BoxplotSimpleComponent } from './boxplot-simple/boxplot-simple.component';

import { AngularMaterialModuleModule } from '../utils/angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BoxplotComponent', () => {
  let component: BoxplotComponent;
  let fixture: ComponentFixture<BoxplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoxplotComponent,
        BoxplotSimpleComponent
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
    fixture = TestBed.createComponent(BoxplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
