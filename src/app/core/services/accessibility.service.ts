import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  // Usamos um Signal para rastrear o estado (Angular 17+)
  isHighContrast = signal(false);

  toggleHighContrast() {
    this.isHighContrast.set(!this.isHighContrast());
    
    // Manipula a classe diretamente no body para afetar o CSS global
    if (this.isHighContrast()) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }
}