import { TestBed, inject } from '@angular/core/testing';

import { AdminSignUpUserService } from './admin-sign-up-user.service';

describe('AdminSignUpUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSignUpUserService]
    });
  });

  it('should be created', inject([AdminSignUpUserService], (service: AdminSignUpUserService) => {
    expect(service).toBeTruthy();
  }));
});
