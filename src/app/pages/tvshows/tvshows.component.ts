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
    this.getPage(1);
  }
  getPage(page: number) {
    this.tvService.getTvshows(page).subscribe((resp: TvShow[]) => {
      this.tvList = resp;
      this.downloaded = true;
    });
  }
  paginate(event) {
    const pageNumber = event.page + 1;
    if (this.term) {
      this.searchMovie(this.term, pageNumber);
    } else {
      this.getPage(pageNumber);
    }
  }
  searchMovie(term: string, page?: number) {
    if (!term) {
      this.getPage(1);
    } else {
      this.tvService.getTvSearch(term, page).subscribe((resp: TvShow[]) => {
        this.tvList = resp;
      });
    }
  }
}
