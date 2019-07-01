import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartHorizontalTwoComponent } from './bulletchart-horizontal-two.component';

describe('BulletchartHorizontalTwoComponent', () => {
  let component: BulletchartHorizontalTwoComponent;
  let fixture: ComponentFixture<BulletchartHorizontalTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartHorizontalTwoComponent ]
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
