import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, take } from 'rxjs';
import { Imovie } from 'src/app/models/Imovie';
import { MovieService } from 'src/app/shared/services/movie-service.service';

type paginateEvent = {
  page: number;
  first: number;
  rows: number;
  pageCount: number;
};

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  moviesList: Imovie[] = [];
  genreId: string | null;
  downloaded = false;
  linkName = '/movie/';
  inputForm: FormGroup;
  // timerId;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.route.params
      .pipe(take(1))
      .subscribe(({ genreId }: { genreId: string }) => {
        if (genreId) {
          this.genreId = genreId;
          this.getMoviesByGenre(genreId, 1);
        } else {
          this.getPaginatePages(1);
        }
      });
  }
  createForm() {
    this.inputForm = new FormGroup({
      inp: new FormControl(''),
    });
    this.inputForm.controls['inp'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe((resp) => {
        if (!resp) {
          this.getPaginatePages(1);
        } else {
          this.movieService.getMoviesSearch(resp, 1).subscribe((resp) => {
            this.moviesList = resp;
          });
        }
      });
  }

  searchMovie(page = 1) {
    const term = this.inputForm.controls['inp'].value;
    if (!term) {
      this.getPaginatePages(page);
    } else {
      this.movieService.getMoviesSearch(term, page).subscribe((resp) => {
        this.moviesList = resp;
      });
    }
  }

  // timeoutHandler(term, page?) {
  //   if (!this.term) {
  //     this.getPaginatePages(page);
  //   } else {
  //     this.movieService.getMoviesSearch(value, page).subscribe((resp) => {
  //       this.moviesList = resp;
  //     });
  //   }
  // }

  getPaginatePages(page: number) {
    this.movieService.getSearch(page.toString()).subscribe((resp) => {
      this.moviesList = resp;
      this.downloaded = true;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.movieService
      .getMoviesDiscover(genreId, page)
      .subscribe((resp: Imovie[]) => {
        this.moviesList = resp;
        this.downloaded = true;
      });
  }

  paginate(event: paginateEvent) {
    const pageNumber = event.page + 1;
    console.log(this.inputForm.controls['inp'].value);

    if (this.inputForm.controls['inp'].value) {
      this.searchMovie(pageNumber);
    } else if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPaginatePages(pageNumber);
    }
  }
}
