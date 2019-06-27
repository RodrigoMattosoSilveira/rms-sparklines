import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmstekSparklinesComponent } from './rmstek-sparklines.component';

describe('RmstekSparklinesComponent', () => {
  let component: RmstekSparklinesComponent;
  let fixture: ComponentFixture<RmstekSparklinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmstekSparklinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmstekSparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
