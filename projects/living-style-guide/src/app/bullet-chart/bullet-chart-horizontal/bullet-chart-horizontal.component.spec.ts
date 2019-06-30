import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletChartHorizontalComponent } from './bullet-chart-horizontal.component';

describe('BulletChartHorizontalComponent', () => {
  let component: BulletChartHorizontalComponent;
  let fixture: ComponentFixture<BulletChartHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletChartHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletChartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
