import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private serverApi = 'https://music-api-2022.herokuapp.com/musics'


  constructor(private httpClient: HttpClient) { }

  getCategoriasList() : Observable<Musica[]>{
    return this.httpClient.get<Musica[]>(this.serverApi)
  }

  createCategoria(musica:Musica): Observable<Musica>{
    return this.httpClient.post<Musica>(this.serverApi, musica)
  }
}
