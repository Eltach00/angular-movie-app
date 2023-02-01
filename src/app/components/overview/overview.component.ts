import { Component, Input } from '@angular/core';
import imageSizess from 'src/app/constants/image-sizess';
import { IndividualMovie } from 'src/app/models/Imovie';
import { IndividualTvShow } from 'src/app/models/TvModels';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  @Input() item: IndividualMovie | IndividualTvShow;
  imageSize = imageSizess;
}
