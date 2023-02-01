import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, forkJoin } from 'rxjs';
import imageSizess from 'src/app/constants/image-sizess';
import {
  IndividualTvShow,
  TvCredits,
  TvPhotos,
  TvShow,
  TvVideos,
} from 'src/app/models/TvModels';
import { TvService } from 'src/app/shared/services/tv.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss'],
})
export class TvshowComponent implements OnInit {
  downloaded = false;
  imageSize = imageSizess;
  tvshow: IndividualTvShow;
  tvVideos: TvVideos;
  tvPhotos: TvPhotos;
  credits: TvCredits;
  constructor(private route: ActivatedRoute, private tvService: TvService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }: { id: number }) => {
      forkJoin([
        this.tvService.getTvShow(id.toString()),
        this.tvService.getTvVideos(id.toString()),
        this.tvService.getTvImages(id.toString()),
        this.tvService.getTvCredits(id.toString()),
      ]).subscribe(
        (resp: [IndividualTvShow, TvVideos, TvPhotos, TvCredits]) => {
          this.tvshow = resp[0];
          this.tvVideos = resp[1];
          this.tvPhotos = resp[2];
          this.credits = resp[3];
          this.downloaded = true;
        }
      );
    });
  }
}
