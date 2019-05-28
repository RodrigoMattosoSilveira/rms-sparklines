import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLineComponent } from './spark-line.component';

describe('SparkLineComponent', () => {
  let component: SparkLineComponent;
  let fixture: ComponentFixture<SparkLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLineComponent);
    component = fixture.componentInstance;
    component.className= '';
    component.decorationPointsString = JSON.stringify([]);
    component.dotRadius=1.5;
    component.height=32;
    component.lineColor='Black';
    component.linePointsString = JSON.stringify([1, 2, 3]);
    component.lineWidth=1.5;
    component.shadeColor='';
    component.width=128;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
