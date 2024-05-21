import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { delay } from 'rxjs';
interface menuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authServices = inject(AuthService);
  logged: boolean = false;
  menu: menuItem[] = [
    { name: 'Home', route: '' },
    { name: 'Login', route: '/login' },
    { name: 'Acerca de', route: '/sabermas' },
  ];

  menuLogged: menuItem[] = [
    { name: 'dashboard', route: '/dashboard' },
    { name: 'galearia', route: '/galeria' },
    { name: 'crud', route: '/crud' },
    { name: 'profile', route: '/profile' },
  ];

  username!: string;

  getLoggedUserName(): void {
    this.username = this.authServices.getUserName();
  }

  ngOnInit(): void {
    this.getLoggedUserName();
    this.authServices.loginStatusChanged
      .pipe(delay(2000))
      .subscribe((logged) => {
        this.logged = logged;
        this.setMenuItems();
      });
  }

  setMenuItems() {
    this.logged
      ? this.menu.push(...this.menuLogged)
      : this.menu.splice(0, this.menu.length - 4);
  }

  logout() {
    this.authServices.logout();
    this.authServices.loginStatusChanged.subscribe((logged) => {
      this.logged = logged;
      this.setMenuItems();
    });
  }
}
