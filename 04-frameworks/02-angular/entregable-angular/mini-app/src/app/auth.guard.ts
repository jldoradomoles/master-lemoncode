import { Injectable } from '@angular/core';
import { GuardResult, MaybeAsync, Route, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLogged().pipe(
      map((logged) => {
        return logged ? true : false;
      })
    );
  }
}
