import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';
import { BaseChartDirective } from 'ng2-charts'; 
import { ChartConfiguration, ChartData, ChartType, Chart, registerables } from 'chart.js';
import { RouterLink } from '@angular/router';

//Implementação da lógica e comportamento do dashboard

Chart.register(...registerables); 

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, BaseChartDirective,RouterLink], 
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
  
  // Dados estáticos para o exemplo 
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

    public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [5.85, 5.90, 6.02, 5.98, 5.92, 5.95],
        label: 'Preço Médio (R$)',
        borderColor: '#1351B4',
        backgroundColor: 'rgba(19, 81, 180, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

    public lineChartOptions: ChartConfiguration<'line'>['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'top' }
      }
    };

  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}