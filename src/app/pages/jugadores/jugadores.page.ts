import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from './jugadores.model';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];
  
  constructor(private router:Router,private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.listaJugadores = this.jugadoresService.getAll()
  }

  addJugador(){
    this.router.navigate(['/agregar'])
}

  listar(){
    this.listaJugadores = this.jugadoresService.getAll()

  }
  
  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }
  handleReorder(ev: CustomEvent<any>) {

    ev.detail.complete();
  }
  buscarJugador(event: any){
    const texto = event.target.value;
    if(texto && texto.trim() != ''){
      this.listaJugadores = this.listaJugadores.filter((aux:any) => {
      //busque resultados 
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >-1);

      })

    }
  }
}
