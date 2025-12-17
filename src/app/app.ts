import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GovHeader } from './shared/components/gov-header/gov-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GovHeader], // Importe aqui
  template: `
    <app-gov-header></app-gov-header>
    <main class="container mx-auto p-4">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}