import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartVerticalComponent } from './bulletchart-vertical.component';

describe('BulletchartVerticalComponent', () => {
  let component: BulletchartVerticalComponent;
  let fixture: ComponentFixture<BulletchartVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletchartVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
