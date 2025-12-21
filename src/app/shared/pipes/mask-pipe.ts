import { Pipe, PipeTransform } from '@angular/core';

//Implementação da mascara para cpf e placa

@Pipe({
  name: 'maskPlaca',
  standalone: true
})
export class MaskPlacaPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // 1. Remove qualquer traço ou espaço existente e deixa em maiúsculo
    const limpo = value.toUpperCase().replace(/[^A-Z0-9]/g, '');

    // 2. Se tiver 7 caracteres (padrão Brasil), coloca o traço após as 3 letras
    if (limpo.length === 7) {
      return `${limpo.slice(0, 3)}-${limpo.slice(3)}`;
    }

    return value;
  }
}

@Pipe({
  name: 'maskCpf',
  standalone: true
})
export class MaskCpfPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';

    const limpo = value.replace(/\D/g, '');

    if (limpo.length !== 11) return value;

    return limpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  }
}