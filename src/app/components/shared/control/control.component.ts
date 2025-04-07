import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(click)': 'onClick()',
  }
})
export class ControlComponent implements OnInit, AfterContentInit {

  constructor() {
    afterRender(() => {
      console.log("Control AfterRender called");
    })

    afterNextRender(() => {
      console.log("Control AfterNextRender called");
    });
  }

  ngOnInit() {
    console.log("Control OnInit called");
    console.log(this.controlInput?.nativeElement);
  }

  ngAfterContentInit() {
    console.log("Control AfterContentInit called");
    console.log(this.controlInput?.nativeElement);
  }

  @ContentChild('input') controlInput?: ElementRef;

  @HostBinding('class') className = 'control';

  @HostListener('mouseenter') onHover() {
    this.className = 'control highlight';  // Add 'highlight' class on hover
  }

  @HostListener('mouseleave') onLeave() {
    this.className = 'control';  // Remove 'highlight' class on mouse leave
  }

  @Input({ required: true }) title!: string;

  onClick() {
    console.log('Control clicked!');
    console.log(this.controlInput)
  }


}
