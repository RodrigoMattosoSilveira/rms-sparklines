import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartHorizontalComponent } from './bulletchart-horizontal.component';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


describe('BulletchartHorizontalComponent', () => {
  let component: BulletchartHorizontalComponent;
  let fixture: ComponentFixture<BulletchartHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartHorizontalComponent ],
      imports: [
        AngularMaterialModuleModule,
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
    fixture = TestBed.createComponent(BulletchartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
