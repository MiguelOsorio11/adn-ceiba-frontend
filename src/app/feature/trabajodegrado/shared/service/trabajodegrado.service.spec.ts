import { TestBed } from '@angular/core/testing';

import { TrabajodegradoService } from './trabajodegrado.service';

describe('TrabajodegradoService', () => {
  let service: TrabajodegradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajodegradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
