import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() movies: Imovie[];
}
