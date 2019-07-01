import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartComponent } from './bulletchart.component';

describe('BulletchartComponent', () => {
  let component: BulletchartComponent;
  let fixture: ComponentFixture<BulletchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
