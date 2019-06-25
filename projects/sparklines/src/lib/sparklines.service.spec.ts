import { TestBed } from '@angular/core/testing';

import { SparklinesService } from './sparklines.service';

describe('SparklinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SparklinesService = TestBed.get(SparklinesService);
    expect(service).toBeTruthy();
  });
});
