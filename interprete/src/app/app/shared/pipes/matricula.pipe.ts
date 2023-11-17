import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula'
})
export class MatriculaPipe implements PipeTransform {

  transform(matricula: string): string {
    if(matricula.length != 11) {
      return matricula;
    }
    const parte1 = matricula.substring(0, 4);
    const parte2 = matricula.substring(4, 6);
    const parte3 = matricula.substring(6, 11);

    return `${parte1}.${parte2}.${parte3}`;
  }
}
