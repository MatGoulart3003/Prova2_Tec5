import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private serverApi = 'https://music-api-2022.herokuapp.com/categories'


  constructor(private httpClient: HttpClient) { }

  getCategoriasList() : Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(this.serverApi)
  }

  createCategoria(categoria:Categoria): Observable<Categoria>{
    return this.httpClient.post<Categoria>(this.serverApi, categoria)
  }
  
}
