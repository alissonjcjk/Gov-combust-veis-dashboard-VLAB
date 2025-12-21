import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccessibilityService } from '../../../core/services/accessibility.service';

//Implementa a lógica e comportamento do header

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