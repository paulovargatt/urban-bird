import {Pipe, PipeTransform} from '@angular/core';
import {pipe} from 'rxjs/util/pipe';

@Pipe({
  name: 'descricaoReduzida'
})


export class DescricaoReduzida implements PipeTransform{

  transform(texto: string){
    if(texto.length > 15){
      return texto.substr(0,15) + '...'
    }
    return
  }

}
