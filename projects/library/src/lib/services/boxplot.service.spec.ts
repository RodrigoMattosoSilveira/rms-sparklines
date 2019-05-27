import { TestBed } from '@angular/core/testing';

import { BoxplotService } from './boxplot.service';

describe('BoxplotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxplotService = TestBed.get(BoxplotService);
    expect(service).toBeTruthy();
  });
});
