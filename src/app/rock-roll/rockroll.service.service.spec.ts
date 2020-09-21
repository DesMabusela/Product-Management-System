import { TestBed } from '@angular/core/testing';

import { Rockroll.ServiceService } from './rockroll.service.service';

describe('Rockroll.ServiceService', () => {
  let service: Rockroll.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rockroll.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
