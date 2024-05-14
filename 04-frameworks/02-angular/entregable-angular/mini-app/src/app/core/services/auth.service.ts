import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Implementar la lógica de login
    if (username === 'masterlemoncode' && password === '12345678') {
      return of(true);
    } else {
      alert('Usuario o contraseña incorrectos');
      return of(false);
    }
  
  }

  // Funcion para hacer logout 
  logout(): void {

  }

  // Funcion para saber si el usuario esta logeado
  isLogged(): boolean {
    return false;
  }


  // Funcion para obtener el nombre de usuario logeado
  getUserName(): string {
    return '';
  }


}
