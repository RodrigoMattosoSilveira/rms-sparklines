import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletchartHorizontalComponent } from './bulletchart-horizontal.component';

describe('BulletchartHorizontalComponent', () => {
  let component: BulletchartHorizontalComponent;
  let fixture: ComponentFixture<BulletchartHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletchartHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletchartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
