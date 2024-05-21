import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);

  loginStatusChanged = new Subject<boolean>();


  login(username: string, password: string): Observable<boolean> {
    // Implementar la lógica de login
    if (username === 'jose' && password === '12345678') {
      localStorage.setItem('loggedInUser', username);
      this.loginStatusChanged.next(true);
      return of(true);
    } else {
      alert('Usuario o contraseña incorrectos');
      return of(false);
    }
  
  }

  // Funcion para hacer logout 
  logout(): void {
    localStorage.setItem('loggedInUser', '');
    this.loginStatusChanged.next(false);
    this.router.navigate(['']);
  }

  // Funcion para saber si el usuario esta logeado
  isLogged(): Observable<boolean> {
    let name =  localStorage.getItem('loggedInUser');
    return of(name ? true : false);
  }


  // Funcion para obtener el nombre de usuario logeado
  getUserName(): string {
    let name =  localStorage.getItem('loggedInUser');
    return name ? name : '';
  }


}
