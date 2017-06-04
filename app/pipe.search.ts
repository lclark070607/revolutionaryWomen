import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './component.app';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData : Artist[], pipeModifier : string) {
    return  pipeData.filter((eachItem)=> {
    return  eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
            eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}