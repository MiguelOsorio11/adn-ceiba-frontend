import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrabajodegradoComponent } from './listar-trabajodegrado.component';

describe('ListarTrabajodegradoComponent', () => {
  let component: ListarTrabajodegradoComponent;
  let fixture: ComponentFixture<ListarTrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
