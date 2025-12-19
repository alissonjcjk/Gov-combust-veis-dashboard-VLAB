import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';
import { Abastecimento } from '../../../core/models/abastecimento.model'; // Importe o model
import { map, combineLatest, startWith, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-consulta-lista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './consulta-lista.html',
})

export class ConsultaListaComponent implements OnInit {
  private facade = inject(AbastecimentoFacade);

  private paginaAtual$ = new BehaviorSubject<number>(1);
  itensPorPagina = 5; 
  totalItens = 0;
  
  searchControl = new FormControl('', { nonNullable: true }); // Garante que nunca seja null

  ufControl = new FormControl('');
  combustivelControl = new FormControl('');
  dataInicioControl = new FormControl('');
  dataFimControl = new FormControl('');

  ufs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  // Adicionamos a tipagem explícita : Observable<Abastecimento[]>
  abastecimentosFiltrados$ = combineLatest([
    this.facade.abastecimentos$,
    this.ufControl.valueChanges.pipe(startWith('')),
    this.combustivelControl.valueChanges.pipe(startWith('')),
    this.dataInicioControl.valueChanges.pipe(startWith('')),
    this.dataFimControl.valueChanges.pipe(startWith('')),
    this.paginaAtual$ // Adicionamos a página ao fluxo
  ]).pipe(
    map(([lista, uf, combustivel, dataInicio, dataFim, pagina]) => {
      // 1. Primeiro filtramos a lista completa
      const filtrados = lista.filter(item => {
        const filtroUF = !uf || item.uf === uf;
        const filtroCombustivel = !combustivel || item.combustivel === combustivel;
        
        const dataItem = new Date(item.data);
        const inicio = dataInicio ? new Date(dataInicio) : null;
        const fim = dataFim ? new Date(dataFim) : null;
        const filtroData = (!inicio || dataItem >= inicio) && (!fim || dataItem <= fim);

        return filtroUF && filtroCombustivel && filtroData;
      });

      // 2. Guardamos o total para a interface
      this.totalItens = filtrados.length;

      // 3. Aplicamos a paginação (fatiamos o array)
      const inicioIndice = (pagina - 1) * this.itensPorPagina;
      const fimIndice = inicioIndice + this.itensPorPagina;
      
      return filtrados.slice(inicioIndice, fimIndice);
    })
  );

  // Métodos de navegação
  mudarPagina(direcao: number) {
    const novaPagina = this.paginaAtual$.value + direcao;
    if (novaPagina > 0 && novaPagina <= Math.ceil(this.totalItens / this.itensPorPagina)) {
      this.paginaAtual$.next(novaPagina);
    }
  }

  get paginaAtual() {
    return this.paginaAtual$.value;
  }




  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}