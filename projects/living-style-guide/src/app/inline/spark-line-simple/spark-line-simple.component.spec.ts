import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLineSimpleComponent } from './spark-line-simple.component';

describe('SparkLineSimpleComponent', () => {
  let component: SparkLineSimpleComponent;
  let fixture: ComponentFixture<SparkLineSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkLineSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
