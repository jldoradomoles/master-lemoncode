import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import Imagenes, { Imagen } from './imagenes';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  imagenes: Imagen[] = [];

  ngOnInit(): void {
    this.imagenes = Imagenes;
  }
}
