import { TestBed } from '@angular/core/testing';

import { RmstekSparklinesService } from './rmstek-sparklines.service';

describe('RmstekSparklinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RmstekSparklinesService = TestBed.get(RmstekSparklinesService);
    expect(service).toBeTruthy();
  });
});
