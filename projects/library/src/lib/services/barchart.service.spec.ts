import { TestBed } from '@angular/core/testing';

import { BarchartService } from './barchart.service';

describe('BarchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarchartService = TestBed.get(BarchartService);
    expect(service).toBeTruthy();
  });
});
