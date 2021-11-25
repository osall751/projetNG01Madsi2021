import { TestBed } from '@angular/core/testing';

import { RvapiService } from './rvapi.service';

describe('RvapiService', () => {
  let service: RvapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
