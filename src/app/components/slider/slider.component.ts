import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() movie: Imovie;
}
