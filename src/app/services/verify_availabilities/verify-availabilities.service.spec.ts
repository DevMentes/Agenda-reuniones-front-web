import { TestBed, inject } from '@angular/core/testing';

import { VerifyAvailabilitiesService } from './verify-availabilities.service';

describe('VerifyAvailabilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyAvailabilitiesService]
    });
  });

  it('should be created', inject([VerifyAvailabilitiesService], (service: VerifyAvailabilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
