import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  filtro = '';

  books: Libro[] = [];

  constructor(private _libroService: LibroService) { }

  ngOnInit(): void {
    this.getLibros();
  }
  getLibros() {
    this._libroService.getListBooks("").subscribe((data: any) => {
      this.books = data.result;
    }, (error: any) => {
      console.log(error);
    });
  }
}
