import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { LibroService } from '../services/libro.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private _libroService: LibroService) {}

  transform(value: any, arg: any): Libro[] {
    const postResult: Libro[] = [];
    this._libroService.getListBooks(arg).subscribe((data: any) => {
      for (const book of data.result){
        postResult.push(book);
      }
    }, (error: any) => {
      console.log(error);
    });
    return postResult;
  }

}
