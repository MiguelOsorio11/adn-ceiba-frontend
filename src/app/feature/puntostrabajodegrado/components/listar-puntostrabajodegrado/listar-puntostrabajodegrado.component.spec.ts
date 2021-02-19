import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuntostrabajodegradoComponent } from './listar-puntostrabajodegrado.component';

describe('ListarPuntostrabajodegradoComponent', () => {
  let component: ListarPuntostrabajodegradoComponent;
  let fixture: ComponentFixture<ListarPuntostrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPuntostrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPuntostrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
