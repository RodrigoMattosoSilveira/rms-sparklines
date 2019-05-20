import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkBoxplotComponent } from './spark-boxplot.component';

describe('SparkBoxplotComponent', () => {
  let component: SparkBoxplotComponent;
  let fixture: ComponentFixture<SparkBoxplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkBoxplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkBoxplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
