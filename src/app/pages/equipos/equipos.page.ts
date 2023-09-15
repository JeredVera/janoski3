import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

  cargarMasData(){
    this.paginaActual++;
    const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`
    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.rickymorty = this.rickymorty.concat(resultado.results);
      this.mensaje();
    });
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
    this.mensajeToast();//Llana la Alerta
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
    this.mensajeToast();
  }

  //Alerta
  mensajeToast(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }

  mensaje(){
    Swal.fire({
      title: 'Goodines',
      text: 'Si funciono',
      icon: 'success',
      heightAuto: false,
      confirmButtonText: 'Ok'
    })
  }
  

}
