import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartHorizontalTwoComponent } from './bulletchart-horizontal-two.component';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BulletchartHorizontalTwoComponent', () => {
  let component: BulletchartHorizontalTwoComponent;
  let fixture: ComponentFixture<BulletchartHorizontalTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartHorizontalTwoComponent ],
      imports: [
        AngularMaterialModuleModule,
        RmstekSparklinesModule,
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
    fixture = TestBed.createComponent(BulletchartHorizontalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
