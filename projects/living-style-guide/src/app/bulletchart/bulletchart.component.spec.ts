import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartComponent } from './bulletchart.component';
import { BulletchartHorizontalComponent } from './bulletchart-horizontal/bulletchart-horizontal.component';
import { BulletchartHorizontalTwoComponent } from './bulletchart-horizontal-two/bulletchart-horizontal-two.component';
import { BulletchartVerticalComponent } from './bulletchart-vertical/bulletchart-vertical.component';

import { AngularMaterialModuleModule } from '../utils/angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BulletchartComponent', () => {
  let component: BulletchartComponent;
  let fixture: ComponentFixture<BulletchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         BulletchartComponent,
         BulletchartHorizontalComponent,
         BulletchartHorizontalTwoComponent,
         BulletchartVerticalComponent,
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
    fixture = TestBed.createComponent(BulletchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
