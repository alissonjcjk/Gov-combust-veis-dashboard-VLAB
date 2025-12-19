import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page';
import { ConsultaListaComponent } from './features/consulta/consulta-lista/consulta-lista';
import { AbastecimentoDetalheComponent } from './features/consulta/abastecimento-detalhe/abastecimento-detalhe';

export const routes: Routes = [
  // Redireciona a rota vazia para o dashboard automaticamente
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  // Define a rota do Dashboard
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'consulta', component: ConsultaListaComponent },
  { path: 'consulta/:id', component: AbastecimentoDetalheComponent },
  // Rota de fallback (404) - opcional por enquanto
  { path: '**', redirectTo: 'dashboard' }
];