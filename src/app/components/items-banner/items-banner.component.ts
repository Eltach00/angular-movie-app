import { Component, EventEmitter, Input, Output } from '@angular/core';
import imageSizess from 'src/app/constants/image-sizess';
import { Imovie } from 'src/app/models/Imovie';
import { TvShow } from 'src/app/models/TvModels';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() movies: (Imovie | TvShow)[];
  @Input() linkName: string;
  @Output() handleRemove = new EventEmitter();
  handleClick(event) {
    this.handleRemove.emit(event);
  }
  imageSize = imageSizess;
}
