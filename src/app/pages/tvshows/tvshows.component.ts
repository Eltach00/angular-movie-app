import { TypeModifier } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  timerId;
  @ViewChild('inputText', { static: false }) inputText: ElementRef | undefined;

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
      this.searchTv(this.term, pageNumber);
    } else {
      this.getPage(pageNumber);
    }
  }
  searchTv(term: string, page?: number) {
    if (!term) {
      this.getPage(1);
    } else {
      this.tvService.getTvSearch(term, page).subscribe((resp: TvShow[]) => {
        this.tvList = resp;
      });
    }
  }

  searchTv2(term, page?) {
    if (this.timerId) {
      clearTimeout(this.timerId);

      this.timerId = setTimeout(() => {
        this.timeoutHandler(term, page);

        clearTimeout(this.timerId);
      }, 500);
    } else {
      this.timerId = setTimeout(() => {
        this.timeoutHandler(term, page);

        clearTimeout(this.timerId);
      }, 500);
    }
  }

  timeoutHandler(term, page?) {
    if (!term) {
      this.getPage(1);
    } else {
      this.tvService.getTvSearch(term, page).subscribe((resp: TvShow[]) => {
        this.tvList = resp;
      });
    }
  }
}
