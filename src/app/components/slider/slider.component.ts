import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import imageSizess from 'src/app/constants/image-sizess';
import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() movies: Imovie[] = null;
  currentIndex = 0;
  imageSize = imageSizess.LARGE_SIZE;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.movies.length;
    }, 5000);
  }
}
