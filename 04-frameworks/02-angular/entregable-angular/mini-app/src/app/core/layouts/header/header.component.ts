import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import {MatIconModule} from '@angular/material/icon';
interface menuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  authServices = inject(AuthService);
  logged: boolean = false;
  menu: menuItem[] = [
    { name: 'Home', route: '' },
    { name: 'Login', route: '/login' },
    { name: 'Acerca de', route: '/sabermas' } 
  ];

  refreshHeader() {
    this.logged = this.authServices.isLogged();
    this.setMenuItems();
  };

  menuLogged: menuItem[] = [
    { name: 'dashboard', route: '/dashboard' },
    { name: 'galearia', route: '/galeria' },
    { name: 'crud', route: '/crud' },
    { name: 'profile', route: '/profile' },
  ];


  ngOnInit(): void {
   this.logged = this.authServices.isLogged();
   this.setMenuItems();
  }


  setMenuItems() {
    this.logged ?  this.menu.push(...this.menuLogged) : this.menu;
    console.log(this.menu);
  }

  logout() {
    this.authServices.logout();
    this.logged = false;
  }
}
