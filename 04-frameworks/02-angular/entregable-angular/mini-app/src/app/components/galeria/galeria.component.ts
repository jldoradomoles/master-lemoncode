import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import Imagenes, { Imagen } from './imagenes';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { interval, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

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
  isImageLarge = false;
  imageName: string = '';
  imagenDecrese: boolean = true;
  imagenIncrese: boolean = true;
  subscription$: Subject<void> = new Subject();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.getThreeFirstImages();
  }

  getThreeFirstImages(): void {
    this.imagenes = Imagenes.slice(0, 3);
  }

  nextImages(): void {
    this.imagenInit += 1;
    if (this.imagenEnd <= 8) {
      this.imagenEnd += 1;
    }
    console.log(this.imagenInit, this.imagenEnd);

    if (this.imagenEnd <= 9) {
      this.imagenes = Imagenes.slice(this.imagenInit, this.imagenEnd);
      this.isFirstImage = false;
    }
    if (this.imagenEnd == 9) {
      this.isLastImage = true;
    }
  }

  previousImages(): void {
    if (this.imagenInit >= 1) {
      this.imagenInit -= 1;
    }
    this.imagenEnd -= 1;
    if (this.imagenInit >= 0) {
      this.imagenes = Imagenes.slice(this.imagenInit, this.imagenEnd);
      this.isLastImage = false;
    }
    if (this.imagenInit === 0) {
      this.isFirstImage = true;
    }
  }

  imagenSelected(imagen: Imagen): void {
    this.imagenIncrese = false;
    this.imagenDecrese = true;
    const element2 =
      this.elementRef.nativeElement.querySelector('#imagen-selected');
    this.renderer.setStyle(element2, 'width', '600px');
    this.imageName = imagen.title;
    const element =
      this.elementRef.nativeElement.querySelector('#imagen-selected');
    this.renderer.setAttribute(element, 'src', imagen.src);
  }

  increaseImageSize(): void {
    this.imagenDecrese = false;
    this.imagenIncrese = true;
    const element =
      this.elementRef.nativeElement.querySelector('#imagen-selected');
    this.renderer.setStyle(element, 'width', '800px');
  }

  decreseImageSize(): void {
    this.imagenIncrese = false;
    this.imagenDecrese = true;
    const element =
      this.elementRef.nativeElement.querySelector('#imagen-selected');
    this.renderer.setStyle(element, 'width', '600px');
  }

  play(): void {
    this.subscription$ = new Subject<void>();
    interval(2000)
      .pipe(take(6), takeUntil(this.subscription$))
      .subscribe(() => {
        console.log(this.imagenEnd);
        console.log('next');
        this.nextImages();
      });
  }

  stop(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
