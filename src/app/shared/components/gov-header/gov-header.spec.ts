import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovHeader } from './gov-header';
import { AccessibilityService } from '../../../core/services/accessibility.service';
import { provideRouter } from '@angular/router';

//Arquivo de testes para o header da aplicação com Jasmine

describe('GovHeader - Acessibilidade', () => {
  let component: GovHeader;
  let fixture: ComponentFixture<GovHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovHeader],
      providers: [
        provideRouter([]),
        AccessibilityService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GovHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar a classe "high-contrast" no body ao chamar toggleContrast', () => {
    // 1. Garante que o body comece limpo
    document.body.classList.remove('high-contrast');

    // 2. Liga o contraste
    component.toggleContrast();
    fixture.detectChanges();
    
    // 3. Verifica se ligou (agora chamando apenas uma vez)
    expect(document.body.classList.contains('high-contrast')).toBe(true);

    // 4. Desliga o contraste
    component.toggleContrast();
    fixture.detectChanges();
    
    // 5. Verifica se removeu
    expect(document.body.classList.contains('high-contrast')).toBe(false);
  });
});