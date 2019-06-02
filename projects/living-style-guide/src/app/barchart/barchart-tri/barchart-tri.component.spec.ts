import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartTriComponent } from './barchart-tri.component';

describe('BarchartTriComponent', () => {
  let component: BarchartTriComponent;
  let fixture: ComponentFixture<BarchartTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
