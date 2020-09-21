import { TestBed } from '@angular/core/testing';

import { RockrollService } from './rockroll.service';

describe('RockrollService', () => {
  let service: RockrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
