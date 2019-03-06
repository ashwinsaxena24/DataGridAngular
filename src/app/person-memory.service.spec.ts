import { TestBed } from '@angular/core/testing';

import { PersonMemoryService } from './person-memory.service';

describe('PersonMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonMemoryService = TestBed.get(PersonMemoryService);
    expect(service).toBeTruthy();
  });
});
