import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntotrabajodegradoComponent } from './puntotrabajodegrado.component';

describe('PuntotrabajodegradoComponent', () => {
  let component: PuntotrabajodegradoComponent;
  let fixture: ComponentFixture<PuntotrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntotrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntotrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
