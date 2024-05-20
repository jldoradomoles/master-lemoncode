import { CanActivateFn } from '@angular/router';
import { AuthService } from './core/services/auth.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService(); // Instantiate the AuthService
  return authService.isLogged(); // Check if the user is logged in
};