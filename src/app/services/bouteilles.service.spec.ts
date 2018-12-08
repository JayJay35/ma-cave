import { TestBed } from '@angular/core/testing';

import { BouteillesService } from './bouteilles.service';

describe('BouteillesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BouteillesService = TestBed.get(BouteillesService);
    expect(service).toBeTruthy();
  });
});
