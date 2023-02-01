import { Component, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/TvModels';
import { TvService } from 'src/app/shared/services/tv.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent implements OnInit {
  downloaded = false;
  tvList: TvShow[];
  term = '';
  linkName = '/tvshow/';
  constructor(private tvService: TvService) {}
  ngOnInit(): void {
    this.tvService.getTvshows().subscribe((resp: TvShow[]) => {
      this.tvList = resp;
      this.downloaded = true;
    });
  }
  paginate(event) {}
  searchMovie(term: string) {}
}
