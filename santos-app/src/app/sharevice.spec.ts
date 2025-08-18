import { TestBed } from '@angular/core/testing';

import { Sharevice } from './sharevice';

describe('Sharevice', () => {
  let service: Sharevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
