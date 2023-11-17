import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    if(telefone.length != 11) {
      return telefone;
    }
    const ddd = telefone.substring(0, 3);
    const numero1 = telefone.substring(3, 7);
    const numero2 = telefone.substring(7, 11);

    return `(${ddd}) ${numero1}-${numero2}`;
  }

}

