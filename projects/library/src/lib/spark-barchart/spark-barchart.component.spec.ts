import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkBarchartComponent } from './spark-barchart.component';

describe('SparkBarchartComponent', () => {
  let component: SparkBarchartComponent;
  let fixture: ComponentFixture<SparkBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
