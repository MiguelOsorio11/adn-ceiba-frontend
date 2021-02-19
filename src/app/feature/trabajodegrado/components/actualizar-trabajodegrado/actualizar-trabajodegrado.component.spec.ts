import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTrabajodegradoComponent } from './actualizar-trabajodegrado.component';

describe('ActualizarTrabajodegradoComponent', () => {
  let component: ActualizarTrabajodegradoComponent;
  let fixture: ComponentFixture<ActualizarTrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
