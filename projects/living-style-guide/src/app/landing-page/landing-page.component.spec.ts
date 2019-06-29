import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [
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
      ],
      providers: [
        HttpClient,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
