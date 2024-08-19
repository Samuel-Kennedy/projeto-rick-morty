import { TestBed } from '@angular/core/testing';

import { RequisicaoRickService } from './requisicao-rick.service';

describe('RequisicaoRickService', () => {
  let service: RequisicaoRickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisicaoRickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
