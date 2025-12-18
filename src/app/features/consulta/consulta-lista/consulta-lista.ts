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

  // Adicionamos a tipagem explícita : Observable<Abastecimento[]>
  abastecimentosFiltrados$: Observable<Abastecimento[]> = combineLatest([
    this.facade.abastecimentos$,
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged()
    )
  ]).pipe(
    map(([lista, termo]) => {
      const filterTerm = termo.toLowerCase();
      return lista.filter(item => 
        item.motorista.toLowerCase().includes(filterTerm) || 
        item.placa.toLowerCase().includes(filterTerm)
      );
    })
  );
  ufControl = new FormControl('');
  combustivelControl = new FormControl('');
  dataInicioControl = new FormControl('');
  dataFimControl = new FormControl('');

  ufs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

  ngOnInit(): void {
    this.facade.carregarDadosDash();
  }
}