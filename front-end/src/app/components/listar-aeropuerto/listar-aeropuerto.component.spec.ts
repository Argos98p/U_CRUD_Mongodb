import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAeropuertoComponent } from './listar-aeropuerto.component';

describe('ListarAeropuertoComponent', () => {
  let component: ListarAeropuertoComponent;
  let fixture: ComponentFixture<ListarAeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAeropuertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
