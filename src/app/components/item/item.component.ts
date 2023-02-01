import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';
import imageSizes from '../../constants/image-sizess';
import { TvShow } from 'src/app/models/TvModels';

@Component({
  selector: 'item-comp',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Imovie | TvShow;
  @Input() linkName: string;

  imageSize = imageSizes.MEDIUM_SIZE;
}
