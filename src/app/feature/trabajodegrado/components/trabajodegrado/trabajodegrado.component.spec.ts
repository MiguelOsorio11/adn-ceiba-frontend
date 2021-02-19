import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajodegradoComponent } from './trabajodegrado.component';

describe('TrabajodegradoComponent', () => {
  let component: TrabajodegradoComponent;
  let fixture: ComponentFixture<TrabajodegradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajodegradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajodegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
