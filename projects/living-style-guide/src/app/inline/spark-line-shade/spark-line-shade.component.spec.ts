import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLineShadeComponent } from './spark-line-shade.component';

describe('SparkLineShadeComponent', () => {
  let component: SparkLineShadeComponent;
  let fixture: ComponentFixture<SparkLineShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkLineShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLineShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
