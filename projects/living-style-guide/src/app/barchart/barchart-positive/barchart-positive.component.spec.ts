import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartPositiveComponent } from './barchart-positive.component';

describe('BarchartPositiveComponent', () => {
  let component: BarchartPositiveComponent;
  let fixture: ComponentFixture<BarchartPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
