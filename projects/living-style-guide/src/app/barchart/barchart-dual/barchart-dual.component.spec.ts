import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDualComponent } from './barchart-dual.component';

describe('BarchartDualComponent', () => {
  let component: BarchartDualComponent;
  let fixture: ComponentFixture<BarchartDualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartDualComponent ]
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
