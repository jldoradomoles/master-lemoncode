import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { SaberMasComponent } from './components/saber-mas/saber-mas.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sabermas', component: SaberMasComponent },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(
        (m) => m.GaleriaComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'crud',
    loadComponent: () =>
      import('./components/crud/crud.component').then((m) => m.CrudComponent),
    canActivate: [AuthGuard],
  },
];
