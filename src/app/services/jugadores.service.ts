import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      id: '1' ,
      nombre: 'Lionel Messi' ,
      imagen: 'https://www.biografiasyvidas.com/biografia/m/fotos/messi.jpg' ,
      fecha: ' 24 de junio de 1987' ,
      descripcion: 'The Best',
    },
    {
      id: '2' ,
      nombre: 'Cristiano Ronaldo' ,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' ,
      fecha: '5 de febrero de 1985' ,
      descripcion: 'Goat',
    },
    {
      id: '3' ,
      nombre: 'Neymar Jr' ,
      imagen: 'https://www.ole.com.ar/2023/07/30/DLKnUqUkk_720x0__1.jpg' ,
      fecha: '5 de febrero de 1992' ,
      descripcion: 'God',
    }
  ]
  constructor() { }

  // Metodos Custom

  // Metodo que devuelve objeto completo
  getAll(){
    return [...this.jugadores]
  }

  // Metodo que devuele un jugador por el id buscado
  getJugador(id: string){
    return {
      ...this.jugadores.find(aux =>{
        return aux.id === id
      })
    }
  }
  //metodo que agrega un jugador

  addJugador(nombre: string, imagen: string, fecha:string, descripcion: string){
    this.jugadores.push({
      nombre, imagen, fecha, descripcion, id: this.jugadores.length + 1 + ""
    })
  }
    //metodo para eliminar un jugador por id

    deleteJugador(id: string){
      this.jugadores = this.jugadores.filter(aux => {
        return aux.id !== id
      })
    }
}

