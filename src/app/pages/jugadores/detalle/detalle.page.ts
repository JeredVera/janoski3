import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugadores.model';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(private router:Router,private toastController:ToastController,private alertController:AlertController,private jugadorService: JugadoresService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if(aux){
        this.jugador = this.jugadorService.getJugador(aux)
      }
    })
  }
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present() 
  }


  async deleteJugador(){
    //this.mensajeToast("JUGADOR ELIMINADO");
    const alerta = await this.alertController.create({
      header: 'ELIMINAR EL JUGADOR',
      message: 'estas seguro que desea eliminar el jjugador?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            if(this.jugador && this.jugador.id !== undefined){
              this.jugadorService.deleteJugador(this.jugador.id);
              this.router.navigate(['/jugadores']);
              this.mensajeToast("Jugador elimando")
            } else{

             }
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.mensajeToast("Accion cancelada");
          }
        }

      ]
    });
    await alerta.present();
    let resultado = await alerta.onDidDismiss();
  
  }
}
