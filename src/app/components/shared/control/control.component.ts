import { Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {

  @HostBinding('class') className = 'control';

  @HostListener('mouseenter') onHover() {
    this.className = 'control highlight';  // Add 'highlight' class on hover
  }

  @HostListener('mouseleave') onLeave() {
    this.className = 'control';  // Remove 'highlight' class on mouse leave
  }

  @Input({ required: true }) title!: string;



}
