import { TestBed, inject } from '@angular/core/testing';

import { FilterSearchService } from './filter-search.service';

describe('FilterSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterSearchService]
    });
  });

  it('should be created', inject([FilterSearchService], (service: FilterSearchService) => {
    expect(service).toBeTruthy();
  }));
});
