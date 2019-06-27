import { TestBed } from '@angular/core/testing';

import { LineService } from './line.service';

describe('LineService', () => {
   let liveService: LineService;
  beforeEach(() => {
     TestBed.configureTestingModule({providers: [LineService]})
     liveService = TestBed.get(LineService);
  });

  it('should be created', () => {
    const service: LineService = TestBed.get(LineService);
    expect(service).toBeTruthy();
  });
});
