import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { AngularMaterialModuleModule } from './utils/angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

describe('AppComponent', () => {
  const appRoutes: Routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AngularMaterialModuleModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes), // https://stackoverflow.com/questions/46108581/no-provider-for-childrenoutletcontexts-injectionerror
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'living-style-guide'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('living-style-guide');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#myTitle').textContent).toContain('SPARKLINES');
  });
});
