import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abastecimento, DashboardStats } from '../models/abastecimento.model';

@Injectable({
  providedIn: 'root'
})

//httpClient serve para buscar os dados do meu json server
export class AbastecimentoService {
  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAbastecimentos(page: number = 1, limit: number = 5): Observable<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(`${this.API}/abastecimentos?_page=${page}&_limit=${limit}`);
  }

  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.API}/kpis`);
  }

  getHistorico(): Observable<any[]> {
  return this.http.get<any[]>(`${this.API}/historicoPrecos`);
}
}