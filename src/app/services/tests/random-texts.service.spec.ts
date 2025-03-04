import { TestBed } from '@angular/core/testing';

import { RandomTextsService } from './random-texts.service';

describe('RandomTextsService', () => {
  let service: RandomTextsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomTextsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
