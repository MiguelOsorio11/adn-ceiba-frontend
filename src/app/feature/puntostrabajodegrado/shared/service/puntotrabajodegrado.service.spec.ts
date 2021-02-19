import { TestBed } from '@angular/core/testing';

import { PuntotrabajodegradoService } from './puntotrabajodegrado.service';

describe('PuntotrabajodegradoService', () => {
  let service: PuntotrabajodegradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntotrabajodegradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
