import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() movie: Imovie;
}
