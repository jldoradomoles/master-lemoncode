import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  Inject,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appRotateImage]',
  standalone: true,
})
export class RotateImageDirective implements OnInit {
  rotation = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() rotationAmount: number = 20;

  rotates: number = 0;

  ngOnInit(): void {
    this.rotates = this.rotationAmount;
  }

  @HostListener('click')
  rotateImage() {
    console.log('Rotating image->', this.rotates);

    this.rotation += this.rotates;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${this.rotation}deg)`
    );
  }
}
