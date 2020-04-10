import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkBarChartOopComponent } from './spark-bar-chart.component';

describe('SparkBarChartComponent', () => {
  let component: SparkBarChartOopComponent;
  let fixture: ComponentFixture<SparkBarChartOopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkBarChartOopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkBarChartOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
