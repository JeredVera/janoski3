import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'jugadores',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/jugadores/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'campeon',
    loadChildren: () => import('./pages/campeon/campeon.module').then( m => m.CampeonPageModule)
  },
  {
    path: 'fichajes',
    loadChildren: () => import('./pages/fichajes/fichajes.module').then( m => m.FichajesPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/jugadores/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'detallecard/:id',
    loadChildren: () => import('./pages/detallecard/detallecard.module').then( m => m.DetallecardPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
