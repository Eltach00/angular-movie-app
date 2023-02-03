import { TypeModifier } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
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
  // timerId;
  inputForm: FormGroup;
  @ViewChild('inputText', { static: false }) inputText: ElementRef | undefined;

  constructor(private tvService: TvService) {}
  ngOnInit(): void {
    this.createForm();
  }
  getPage(page: number) {
    this.tvService.getTvshows(page).subscribe((resp: TvShow[]) => {
      this.tvList = resp;
      this.downloaded = true;
    });
  }
  paginate(event) {
    const pageNumber = event.page + 1;
    const term = this.inputForm.controls['inp'].value;
    if (term) {
      this.searchTv(term, pageNumber);
    } else {
      this.getPage(pageNumber);
    }
  }

  searchTv(term, page) {
    this.tvService.getTvSearch(term, page).subscribe((resp: TvShow[]) => {
      this.tvList = resp;
    });
  }

  createForm() {
    this.inputForm = new FormGroup({
      inp: new FormControl(''),
    });

    this.inputForm.controls['inp'].valueChanges
      .pipe(debounceTime(500))
      .subscribe((resp) => {
        if (!resp) {
          this.getPage(1);
        } else {
          this.tvService.getTvSearch(resp, 1).subscribe((resp: TvShow[]) => {
            this.tvList = resp;
          });
        }
      });
  }

  // searchTv2(term, page?) {
  //   if (this.timerId) {
  //     clearTimeout(this.timerId);

  //     this.timerId = setTimeout(() => {
  //       this.timeoutHandler(term, page);

  //       clearTimeout(this.timerId);
  //     }, 500);
  //   } else {
  //     this.timerId = setTimeout(() => {
  //       this.timeoutHandler(term, page);

  //       clearTimeout(this.timerId);
  //     }, 500);
  //   }
  // }

  // timeoutHandler(term, page?) {
  //   if (!term) {
  //     this.getPage(1);
  //   } else {
  //     this.tvService.getTvSearch(term, page).subscribe((resp: TvShow[]) => {
  //       this.tvList = resp;
  //     });
  //   }
  // }
}
