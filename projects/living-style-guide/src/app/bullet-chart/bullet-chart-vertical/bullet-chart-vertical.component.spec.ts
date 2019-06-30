import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletChartVerticalComponent } from './bullet-chart-vertical.component';

describe('BulletChartVerticalComponent', () => {
  let component: BulletChartVerticalComponent;
  let fixture: ComponentFixture<BulletChartVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletChartVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletChartVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
