import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Musica } from './musica';
import { MusicaService } from './musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  musicaList: Musica [] = []
  newMusica: Musica = {} as Musica

  constructor(private service: MusicaService) { }

  ngOnInit(): void {
    this.loadData()
  }

  saveData(form: NgForm){

    this.service.createCategoria(this.newMusica).subscribe(item =>{
      form.resetForm()
      this.newMusica = {} as Musica
      this.loadData()
    })

  }

  loadData(){
    this.service.getCategoriasList().subscribe(items =>{
      this.musicaList = items
    })
  }

}
