import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';

@Component({
  selector: 'app-consulta-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-lista.html',
})
export class ConsultaListaComponent implements OnInit {
  private facade = inject(AbastecimentoFacade);
  
  // Lista de abastecimentos vinda da Facade
  abastecimentos$ = this.facade.abastecimentos$;

  ngOnInit(): void {
    this.facade.carregarDadosDash(); // Carrega os dados ao iniciar
  }
}