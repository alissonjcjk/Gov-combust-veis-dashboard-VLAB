import { Component, inject } from '@angular/core'; // Importe o inject
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccessibilityService } from '../../../core/services/accessibility.service'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-gov-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './gov-header.html',
  styleUrl: './gov-header.css'
})
export class GovHeader {
  // Injetando o serviço de acessibilidade
  private accessibilityService = inject(AccessibilityService);

  toggleContrast() {
    this.accessibilityService.toggleHighContrast();
  }
}