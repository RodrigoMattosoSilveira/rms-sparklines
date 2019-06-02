import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDualComponent } from './barchart-dual.component';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LibraryModule } from 'library';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('BarchartDualComponent', () => {
  let component: BarchartDualComponent;
  let fixture: ComponentFixture<BarchartDualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          BarchartDualComponent,
       ],
       imports: [
           AngularMaterialModuleModule,
           LibraryModule,
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
    fixture = TestBed.createComponent(BarchartDualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
