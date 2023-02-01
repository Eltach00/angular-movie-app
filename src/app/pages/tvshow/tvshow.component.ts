import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import imageSizess from 'src/app/constants/image-sizess';
import { IndividualTvShow, TvShow } from 'src/app/models/TvModels';
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
  credits;
  constructor(private route: ActivatedRoute, private tvService: TvService) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.tvService.getTvShow(id).subscribe((resp: IndividualTvShow) => {
        this.tvshow = resp;
        this.downloaded = true;
      });
    });
  }
}
