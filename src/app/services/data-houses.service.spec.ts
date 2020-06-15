import { TestBed } from '@angular/core/testing';

import { DataHousesService } from './data-houses.service';

describe('DataHousesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHousesService = TestBed.get(DataHousesService);
    expect(service).toBeTruthy();
  });
});
