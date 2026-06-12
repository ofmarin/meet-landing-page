import { TestBed } from '@angular/core/testing';

import { ButtonData } from './button-data';

describe('ButtonData', () => {
  let service: ButtonData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
