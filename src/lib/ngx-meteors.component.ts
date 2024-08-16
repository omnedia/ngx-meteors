import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'om-meteors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-meteors.component.html",
  styleUrl: "./ngx-meteors.component.scss",
})
export class NgxMeteorsComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("meteorRotation")
  set meteorRotation(rotation: string) {
    this.style["--om-meteors-rotate"] = rotation;
  }

  @Input("meteorColor")
  set meteorColor(color: string) {
    this.style["--om-meteors-color"] = color;
  }

  style: any = {};
}
