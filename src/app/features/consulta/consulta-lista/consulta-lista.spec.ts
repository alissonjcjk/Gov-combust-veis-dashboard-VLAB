import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLista } from './consulta-lista';

describe('ConsultaLista', () => {
  let component: ConsultaLista;
  let fixture: ComponentFixture<ConsultaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
