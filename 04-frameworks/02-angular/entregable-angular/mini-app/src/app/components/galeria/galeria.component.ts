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

  imagenInit: number = 0;
  imagenEnd: number = 3;
  isLastImage: boolean = false;
  isFirstImage: boolean = false;

  ngOnInit(): void {
    this.getThreeFirstImages();
  }

  getThreeFirstImages(): void {
    this.imagenes = Imagenes.slice(0, 3);
  }

  nextImages(): void {
    this.imagenInit += 1;
    this.imagenEnd += 1;
    console.log(this.imagenEnd, this.imagenInit);
    if (this.imagenEnd <= 8) {
      this.imagenes = Imagenes.slice(this.imagenInit, this.imagenEnd);
      this.isFirstImage = false;
    }
    if (this.imagenEnd == 8) {
      this.isLastImage = true;
    }
  }

  previousImages(): void {
    if (this.imagenInit >= 1) {
      this.imagenInit -= 1;
    }
    this.imagenEnd -= 1;

    console.log(this.imagenEnd, this.imagenInit);

    if (this.imagenInit >= 0) {
      this.imagenes = Imagenes.slice(this.imagenInit, this.imagenEnd);
    }
    if (this.imagenInit === 0) {
      this.isFirstImage = true;
    }

    // this.imagenInit >= 0
    //   ? (this.imagenes = Imagenes.slice(this.imagenInit, this.imagenEnd))
    //   : (this.isFirstImage = true);
  }
}
