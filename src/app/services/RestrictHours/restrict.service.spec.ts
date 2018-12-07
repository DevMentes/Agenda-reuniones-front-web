import { TestBed, inject } from '@angular/core/testing';

import { RestrictService } from './restrict.service';

describe('RestrictService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestrictService]
    });
  });

  it('should be created', inject([RestrictService], (service: RestrictService) => {
    expect(service).toBeTruthy();
  }));
});
