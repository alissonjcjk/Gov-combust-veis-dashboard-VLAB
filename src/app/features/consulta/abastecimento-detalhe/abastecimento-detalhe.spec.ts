import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbastecimentoDetalheComponent } from './abastecimento-detalhe';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
describe('AbastecimentoDetalhe', () => {
  let component: AbastecimentoDetalheComponent;
  let fixture: ComponentFixture<AbastecimentoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbastecimentoDetalheComponent],
      providers: [provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbastecimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});