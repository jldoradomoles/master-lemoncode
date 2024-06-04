import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import Imagenes, { Imagen } from './imagenes';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { interval, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { RotateImageDirective } from '../../directives/rotate-image-directive.directive';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    RotateImageDirective,
  ],
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
  subscription: Subscription = new Subscription(); // Initialize the 'subscription' property
  isPlaying: boolean = false;
  isStoped: boolean = true;
  steps: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.getThreeFirstImages();
  }

  getThreeFirstImages(): void {
    this.imagenInit = 0;
    this.imagenEnd = 3;
    this.imagenes = Imagenes.slice(0, 3);
  }

  nextImages(): void {
    this.imagenInit += 1;
    if (this.imagenEnd <= 8) {
      this.imagenEnd += 1;
    }
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
    this.imageName = imagen.title;

    const imageSelected =
      this.elementRef.nativeElement.querySelector('#imagen-selected');
    this.renderer.setStyle(imageSelected, 'width', '600px');
    this.renderer.setAttribute(imageSelected, 'src', imagen.src);

    const imageSelectedShow = this.elementRef.nativeElement.querySelector(
      `#${imagen.title}`
    );

    this.renderer.setStyle(imageSelectedShow, 'border', '2px solid #000');

    this.imagenes.forEach((img) => {
      if (img.title !== imagen.title) {
        const imageSelectedHide = this.elementRef.nativeElement.querySelector(
          `#${img.title}`
        );
        this.renderer.setStyle(imageSelectedHide, 'border', 'none');
      }
    });
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
    this.isPlaying = !this.isPlaying;
    this.isStoped = !this.isStoped;
    let step = this.steps === 0 ? 6 : 6 - this.steps;
    this.subscription = interval(2000)
      .pipe(take(step))
      .subscribe(() => {
        this.steps += 1;
        this.nextImages();
        if (this.steps === 6) {
          this.isStoped = !this.isStoped;
          setTimeout(() => {
            this.isStoped = !this.isStoped;
            this.getThreeFirstImages();
            this.steps = 0;
            this.stop();
            this.play();
          }, 2000);
        }
      });
  }

  stop(): void {
    this.isPlaying = !this.isPlaying;
    this.isStoped = !this.isStoped;
    this.steps === 6 ? null : this.subscription.unsubscribe();
  }
}
