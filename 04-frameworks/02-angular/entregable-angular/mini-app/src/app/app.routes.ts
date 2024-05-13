import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { SaberMasComponent } from './components/saber-mas/saber-mas.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProfileComponent } from './components/profile/profile.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'galeria', component:  GaleriaComponent},
    { path: 'sabermas', component:  SaberMasComponent},
    { path: 'users', component:  CrudComponent},
    { path: 'profile', component:  ProfileComponent},
];