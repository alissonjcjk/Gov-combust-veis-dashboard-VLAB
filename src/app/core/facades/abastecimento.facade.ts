import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Abastecimento, DashboardStats } from '../models/abastecimento.model';
import { AbastecimentoService } from '../services/abastecimento.service';


//Esse arquivo isola o componente do serviço
@Injectable({
  providedIn: 'root'
})
export class AbastecimentoFacade {
  private _abastecimentos$ = new BehaviorSubject<Abastecimento[]>([]);
  private _stats$ = new BehaviorSubject<DashboardStats | null>(null);

  constructor(private service: AbastecimentoService) {}

  // Getters para os componentes assinarem
  get abastecimentos$(): Observable<Abastecimento[]> {
    return this._abastecimentos$.asObservable();
  }

  get stats$(): Observable<DashboardStats | null> {
    return this._stats$.asObservable();
  }

  // Métodos de ação
  carregarDadosDash(): void {
    this.service.getAbastecimentos().subscribe(dados => this._abastecimentos$.next(dados));
    this.service.getStats().subscribe(stats => this._stats$.next(stats));
  }
}