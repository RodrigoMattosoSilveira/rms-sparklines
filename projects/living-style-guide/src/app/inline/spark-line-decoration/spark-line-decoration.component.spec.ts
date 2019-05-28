import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLineDecorationComponent } from './spark-line-decoration.component';

describe('SparkLineDecorationComponent', () => {
  let component: SparkLineDecorationComponent;
  let fixture: ComponentFixture<SparkLineDecorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkLineDecorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLineDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
