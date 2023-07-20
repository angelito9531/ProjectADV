import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cortarTexto'
})
export class CortarTextoPipe implements PipeTransform {

  transform(value: string, cantidadDeLetras:number): unknown {
    return value.slice(0,cantidadDeLetras)+ "...";
  }

}
