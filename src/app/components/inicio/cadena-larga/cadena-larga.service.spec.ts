import { TestBed } from '@angular/core/testing';

import { CadenaLargaService } from './cadena-larga.service';

describe('CadenaLargaService', () => {
  let service: CadenaLargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadenaLargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
