import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoriaList: Categoria [] = []
  newCategoria: Categoria = {} as Categoria

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.loadData()
  }

  saveData(form: NgForm){

    this.service.createCategoria(this.newCategoria).subscribe(item =>{
      form.resetForm()
      this.newCategoria = {} as Categoria
      this.loadData()
    })

  }

  loadData(){
    this.service.getCategoriasList().subscribe(items =>{
      this.categoriaList = items
    })
  }


}
