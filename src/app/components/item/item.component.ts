import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';
import imageSizes from '../../constants/image-sizess';

@Component({
  selector: 'item-comp',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Imovie;
  imageSize = imageSizes.MEDIUM_SIZE;
}
