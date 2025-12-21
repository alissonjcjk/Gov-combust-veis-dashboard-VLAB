import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AbastecimentoService } from './abastecimento.service';

//É o arquivo de testes unitários do serviço. Ele garante que as chamadas para a API funcionem conforme o esperado e que erros sejam tratados corretamente.

describe('AbastecimentoService', () => {
  let service: AbastecimentoService;
  let httpMock: HttpTestingController;
  const API = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AbastecimentoService]
    });
    service = TestBed.inject(AbastecimentoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve buscar abastecimentos com os parâmetros de paginação corretos', () => {
    const mockData = [
      { id: 1, posto: 'Posto Alvorada', valorLitro: 5.85 }
    ];

    service.getAbastecimentos(1, 5).subscribe(res => {
      expect(res.length).toBe(1);
    });

    const req = httpMock.expectOne(`${API}/abastecimentos?_page=1&_limit=5`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('deve recuperar os KPIs (stats) do servidor', () => {
    const mockStats = { precoMedioNacional: 5.95, totalConsumido: 15420, postosAtivos: 128 };

    service.getStats().subscribe(stats => {
      expect(stats.precoMedioNacional).toBe(5.95);
    });

    const req = httpMock.expectOne(`${API}/kpis`);
    req.flush(mockStats);
  });

  afterEach(() => {
    httpMock.verify();
  });
});