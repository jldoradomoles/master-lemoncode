import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { delay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
interface menuItem {
  label: string;
  link: string;
  requiresAuth: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authServices = inject(AuthService);
  logged: boolean = false;
  menuItemsView: menuItem[] = [];
  menuItems: menuItem[] = [
    { label: 'Home', link: '/', requiresAuth: false },
    { label: 'Acerca de', link: '/sabermas', requiresAuth: false },
    { label: 'dashboard', link: '/dashboard', requiresAuth: true },
    { label: 'galeria', link: '/galeria', requiresAuth: true },
    { label: 'crud', link: '/crud', requiresAuth: true },
    { label: 'profile', link: '/profile', requiresAuth: true },
    // { label: 'Login', link: '/login', requiresAuth: false },
  ];
  username!: string;

  getLoggedUserName(): void {
    console.log('getLoggedUserName');
    this.username = this.authServices.getUserName();
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getLoggedUserName();
    this.authServices.loginStatusChanged
      .pipe(delay(2000))
      .subscribe((logged) => {
        this.logged = logged;
        this.getLoggedUserName();
      });
  }

  logout() {
    console.log('logout');

    this.authServices.logout();
    this.authServices.loginStatusChanged.subscribe((logged) => {
      this.logged = logged;
    });
  }
}
