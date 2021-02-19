import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrabajodegradoComponent } from './crear-trabajodegrado.component';

describe('CrearTrabajodegradoComponent', () => {
  let component: CrearTrabajodegradoComponent;
  let fixture: ComponentFixture<CrearTrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
