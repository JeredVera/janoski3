import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Jugadores', url: 'jugadores', icon: 'people-circle' },
    { title: 'API', url: 'equipos', icon: 'people' },
    { title: 'Estadisticas', url: 'estadisticas', icon: 'analytics' },
    { title: 'Campeon', url: 'campeon', icon: 'medal' },
    { title: 'Fichaje', url: 'fichajes', icon: 'person-add' },
    { title: 'Cerrar Sesion', url: 'login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
