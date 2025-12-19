import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';
import { Abastecimento } from '../../../core/models/abastecimento.model'; // Importe o model
import { debounceTime, distinctUntilChanged, map, combineLatest, startWith, Observable } from 'rxjs';



@Component({
  selector: 'app-consulta-lista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './consulta-lista.html',
})
export class ConsultaListaComponent implements OnInit {
  private facade = inject(AbastecimentoFacade);
  
  searchControl = new FormControl('', { nonNullable: true }); // Garante que nunca seja null

  ufControl = new FormControl('');
  combustivelControl = new FormControl('');
  dataInicioControl = new FormControl('');
  dataFimControl = new FormControl('');

  ufs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  // Adicionamos a tipagem explícita : Observable<Abastecimento[]>
  abastecimentosFiltrados$: Observable<Abastecimento[]> = combineLatest([
  this.facade.abastecimentos$,
  this.ufControl.valueChanges.pipe(startWith('')),
  this.combustivelControl.valueChanges.pipe(startWith('')),
  this.dataInicioControl.valueChanges.pipe(startWith('')),
  this.dataFimControl.valueChanges.pipe(startWith(''))
]).pipe(
  map(([lista, uf, combustivel, dataInicio, dataFim]) => {
    return lista.filter(item => {

      const filtroUF =
        !uf || item.uf === uf;

      const filtroCombustivel =
        !combustivel || item.combustivel === combustivel;

      const dataItem = new Date(item.data);
      const inicio = dataInicio ? new Date(dataInicio) : null;
      const fim = dataFim ? new Date(dataFim) : null;

      const filtroData =
        (!inicio || dataItem >= inicio) &&
        (!fim || dataItem <= fim);

      return filtroUF && filtroCombustivel && filtroData;
    });
  })
);


  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}