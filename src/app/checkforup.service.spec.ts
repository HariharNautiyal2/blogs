import { TestBed } from '@angular/core/testing';

import { CheckforupService } from './checkforup.service';

describe('CheckforupService', () => {
  let service: CheckforupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckforupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
