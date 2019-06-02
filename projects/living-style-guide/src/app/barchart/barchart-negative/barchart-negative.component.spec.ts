import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartNegativeComponent } from './barchart-negative.component';

describe('BarchartNegativeComponent', () => {
  let component: BarchartNegativeComponent;
  let fixture: ComponentFixture<BarchartNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartNegativeComponent ]
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
