import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page';

export const routes: Routes = [
  // Redireciona a rota vazia para o dashboard automaticamente
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  // Define a rota do Dashboard
  { path: 'dashboard', component: DashboardPageComponent },
  
  // Rota de fallback (404) - opcional por enquanto
  { path: '**', redirectTo: 'dashboard' }
];