import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugadores.model';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(private jugadorService: JugadoresService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if(aux){
        this.jugador = this.jugadorService.getJugador(aux)
      }
    })
  }

}
