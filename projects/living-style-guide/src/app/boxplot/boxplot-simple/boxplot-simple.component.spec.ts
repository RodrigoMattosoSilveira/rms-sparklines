import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotSimpleComponent } from './boxplot-simple.component';

describe('BoxplotSimpleComponent', () => {
  let component: BoxplotSimpleComponent;
  let fixture: ComponentFixture<BoxplotSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxplotSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
