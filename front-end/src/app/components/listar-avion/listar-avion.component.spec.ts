import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvionComponent } from './listar-avion.component';

describe('ListarAvionComponent', () => {
  let component: ListarAvionComponent;
  let fixture: ComponentFixture<ListarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
