import { TestBed } from '@angular/core/testing';

import { StrengthsService } from './strengths.service';

describe('StrengthsService', () => {
  let service: StrengthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
