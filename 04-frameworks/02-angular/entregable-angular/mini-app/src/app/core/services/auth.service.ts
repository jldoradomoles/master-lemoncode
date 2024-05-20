import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);


  login(username: string, password: string): Observable<boolean> {
    // Implementar la lógica de login
    if (username === 'masterlemoncode' && password === '12345678') {
      localStorage.setItem('loggedInUser', username);
      return of(true);
    } else {
      alert('Usuario o contraseña incorrectos');
      return of(false);
    }
  
  }

  // Funcion para hacer logout 
  logout(): void {
    localStorage.setItem('loggedInUser', '');
    this.router.navigate(['']);
  }

  // Funcion para saber si el usuario esta logeado
  isLogged(): boolean {
    let name =  localStorage.getItem('loggedInUser');
    return name ? true : false;
  }


  // Funcion para obtener el nombre de usuario logeado
  getUserName(): string {
    let name =  localStorage.getItem('loggedInUser');
    return name ? name : '';
  }


}
