import { TestBed } from '@angular/core/testing';

import { TranslateLangService } from './translate-lang.service';

describe('TranslateService', () => {
  let service: TranslateLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
