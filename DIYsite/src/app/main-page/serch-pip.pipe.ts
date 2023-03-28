import { Pipe, PipeTransform } from '@angular/core';
import { DIY } from './diyModel';

@Pipe({
  name: 'serchPip'
})
export class SerchPipPipe implements PipeTransform {

  transform(diy: DIY[], term: string) { 
    let filteredDIY: DIY[] =[];  
    if (term && term.length > 0) {
       filteredDIY = diy.filter(
          (diy:DIY) => diy.name.toLowerCase().includes(term.toLowerCase())
       );
    }
    if (filteredDIY.length < 1){
       return diy;
    }
    return filteredDIY;
 }

}
