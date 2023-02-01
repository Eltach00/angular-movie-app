import { Component, Input } from '@angular/core';
import imageSizess from 'src/app/constants/image-sizess';

@Component({
  selector: 'credts',
  templateUrl: './credts.component.html',
  styleUrls: ['./credts.component.scss'],
})
export class CredtsComponent {
  @Input() credits;
  imageSize = imageSizess;
}
