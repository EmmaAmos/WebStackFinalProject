import { TestBed } from '@angular/core/testing';

import { DIYserviceService } from './diyservice.service';

describe('DIYserviceService', () => {
  let service: DIYserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DIYserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
