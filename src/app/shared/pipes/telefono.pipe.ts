import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {

  transform(varTelefono: String): String {

    varTelefono = varTelefono.replace(/\D/g,'');
    let tlfFormat = "";

    for(let i = 0; i <= varTelefono.length - 1; i++){
      tlfFormat = tlfFormat + varTelefono.substr(i * 3, 3) + ".";
    }   
    
    return tlfFormat.substr(0,11);
  }

}


