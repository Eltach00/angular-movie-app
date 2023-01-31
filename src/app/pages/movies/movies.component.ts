import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
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
  popularMovies: Imovie[] = [];
  genreId: string | null;
  downloaded = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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

  getPaginatePages(page: number) {
    this.movieService.getSearch(page.toString()).subscribe((resp) => {
      this.popularMovies = resp;
      this.downloaded = true;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.movieService
      .getMoviesDiscover(genreId, page)
      .subscribe((resp: Imovie[]) => {
        this.popularMovies = resp;
        this.downloaded = true;
      });
  }
  paginate(event: paginateEvent) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPaginatePages(pageNumber);
    }
  }
}
