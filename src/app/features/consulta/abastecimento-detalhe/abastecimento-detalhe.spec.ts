import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoDetalhe } from './abastecimento-detalhe';

describe('AbastecimentoDetalhe', () => {
  let component: AbastecimentoDetalhe;
  let fixture: ComponentFixture<AbastecimentoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbastecimentoDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbastecimentoDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
