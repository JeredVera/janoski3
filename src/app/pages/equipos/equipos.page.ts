import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  rickymorty: any[] = [];

  paginaActual = 1;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`
    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.rickymorty = resultado.results
      console.log(this.rickymorty)
    });
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

}
