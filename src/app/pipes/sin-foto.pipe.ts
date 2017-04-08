import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let noImage = "assets/img/noimage.png";

    if( !value ){
      return "assets/img/noimage.png";
    }


    return ( value.length >0) ? value[1].url : noImage;
  }

}
