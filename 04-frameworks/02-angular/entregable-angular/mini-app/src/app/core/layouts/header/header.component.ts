import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

interface menuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  menu: menuItem[] = [
    { name: 'Home', route: '/home' },
    { name: 'Login', route: '/login' },
    { name: 'Acerca de', route: '/sabermas' } 
  ];

}
