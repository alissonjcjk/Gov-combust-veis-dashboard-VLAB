import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';
import { BaseChartDirective } from 'ng2-charts'; // Importação essencial
import { ChartConfiguration, ChartData, ChartType, Chart, registerables } from 'chart.js';
Chart.register(...registerables); // Isso registra barras, linhas, eixos, etc.

Chart.register(...registerables); // Registro global obrigatório para o Chart.js v4

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, BaseChartDirective], // Adicione o BaseChartDirective aqui
  templateUrl: './dashboard-page.html',
})
export class DashboardPageComponent implements OnInit {
  private facade = inject(AbastecimentoFacade);
  stats$ = this.facade.stats$;

  // Configurações do Gráfico de Barras
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    }
  };
  public barChartType: ChartType = 'bar';
  
  // Dados estáticos para o exemplo (podemos evoluir para dinâmicos depois)
  public barChartData: ChartData<'bar'> = {
    labels: ['DF', 'SP', 'RJ', 'MG', 'RS'],
    datasets: [
      { 
        data: [2500, 5800, 3200, 4100, 2900], 
        label: 'Consumo por UF (Litros)',
        backgroundColor: '#1351B4', // Azul Gov
        hoverBackgroundColor: '#0c326f'
      }
    ]
  };

  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}