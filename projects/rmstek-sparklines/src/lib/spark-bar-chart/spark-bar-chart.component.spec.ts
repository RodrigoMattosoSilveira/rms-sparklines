import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkBarChartComponentOop } from './spark-bar-chart.component';

describe('SparkBarChartComponent', () => {
  let component: SparkBarChartComponentOop;
  let fixture: ComponentFixture<SparkBarChartComponentOop>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkBarChartComponentOop ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkBarChartComponentOop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
