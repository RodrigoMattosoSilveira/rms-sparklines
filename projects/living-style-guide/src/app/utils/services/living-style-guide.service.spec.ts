import { TestBed } from '@angular/core/testing';

import { LivingStyleGuideService } from './living-style-guide.service';

describe('LivingStyleGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivingStyleGuideService = TestBed.get(LivingStyleGuideService);
    expect(service).toBeTruthy();
  });
});
