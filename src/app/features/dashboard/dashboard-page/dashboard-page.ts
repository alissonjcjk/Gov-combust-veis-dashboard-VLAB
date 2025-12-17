import { Component, OnInit, inject } from '@angular/core'; // Adicione o inject aqui
import { CommonModule } from '@angular/common';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
})
export class DashboardPageComponent implements OnInit {
  // Injetamos a facade usando a função inject() fora do construtor
  private facade = inject(AbastecimentoFacade);
  
  // Agora o stats$ consegue acessar o facade sem erros
  stats$ = this.facade.stats$;

  // O construtor pode ficar vazio ou ser removido se não tiver outra lógica
  constructor() {}

  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}