import { Component, OnInit } from '@angular/core';
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
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPaginatePages(1);
  }

  getPaginatePages(page: number) {
    this.movieService.getSearch(page.toString()).subscribe((resp) => {
      this.popularMovies = resp;
    });
  }
  paginate(event: paginateEvent) {
    this.getPaginatePages(event.page + 1);
  }
}
