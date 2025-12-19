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
  private _paginaAtual$ = new BehaviorSubject<number>(1);
  public paginaAtual$ = this._paginaAtual$.asObservable();

  constructor(private service: AbastecimentoService) {}

  // Getters para os componentes assinarem
  get abastecimentos$(): Observable<Abastecimento[]> {
    return this._abastecimentos$.asObservable();
  }

  carregarAbastecimentos(pagina: number = 1): void {
    this._paginaAtual$.next(pagina);
    this.service.getAbastecimentos(pagina, 5).subscribe(dados => {
      this._abastecimentos$.next(dados);
    });
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