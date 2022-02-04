import { Autor } from "./autor";
import { Editorial } from "./editorial";

export interface Libro{
  id?: number;
  autorId: number;
  editorialId:number;
  titulo: string;
  ano: string;
  genero: string;
  paginas: number;
  autor: Autor;
  editorial: Editorial;
}
