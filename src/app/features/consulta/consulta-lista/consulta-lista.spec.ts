import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaListaComponent } from './consulta-lista';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
describe('ConsultaLista', () => {
  let component: ConsultaListaComponent;
  let fixture: ComponentFixture<ConsultaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaListaComponent],
      providers: [provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()] // Resolve o erro de ActivatedRoute
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});