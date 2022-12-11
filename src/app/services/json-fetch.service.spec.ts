import { TestBed } from '@angular/core/testing';

import { JsonFetchService } from './json-fetch.service';

describe('JsonFetchService', () => {
  let service: JsonFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
