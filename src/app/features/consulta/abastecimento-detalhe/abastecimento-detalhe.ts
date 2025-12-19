import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AbastecimentoFacade } from '../../../core/facades/abastecimento.facade';
import { MaskPlacaPipe, MaskCpfPipe} from '../../../shared/pipes/mask-pipe';
import { map, switchMap, filter, tap } from 'rxjs'; // Adicione filter e tap

// ... (mantenha os imports)

@Component({
  selector: 'app-abastecimento-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink, MaskPlacaPipe, MaskCpfPipe],
  templateUrl: './abastecimento-detalhe.html'
})
export class AbastecimentoDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(AbastecimentoFacade);

  abastecimento$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this.facade.abastecimentos$.pipe(
      // 1. Filtra para ignorar a lista vazia inicial do BehaviorSubject
      filter(lista => lista && lista.length > 0),
      // 2. Procura usando == (permite comparar "1" com 1)
      map(lista => lista.find(item => item.id == Number(id))),
      tap(item => console.log('Registro localizado:', item))
    ))
  );

  reportarErro(item: any): void {
  console.log('🚨 Erro reportado no abastecimento:', {
    id: item.id,
    motorista: item.motorista,
    cpf: item.cpf,
    placa: item.placa,
    posto: item.posto,
    data: item.data
  });

  alert('Erro reportado com sucesso! (simulação)');
}


  ngOnInit(): void {
    // Dispara a carga caso o usuário entre direto pelo link da URL
    this.facade.carregarDadosDash();
  }
}