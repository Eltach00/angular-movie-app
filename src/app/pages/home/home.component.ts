import { Component, OnInit } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Imovie[] = [];
  upcomingMovies: Imovie[] = [];
  trendingMovies: Imovie[] = [];
  trendingTvShows: Imovie[] = [];
  moviesDownloaded = true;
  constructor(private movieServivce: MovieService) {}

  ngOnInit(): void {
    this.movieServivce.getMovies('MOVIES_POPULAR').subscribe((resp: any) => {
      this.popularMovies = resp.results.slice(0, 3);
      this.moviesDownloaded = false;
    });
    this.movieServivce.getMovies('MOVIES_UPCOMING').subscribe((resp: any) => {
      this.upcomingMovies = resp.results.slice(0, 3);
      this.moviesDownloaded = false;
    });
    this.movieServivce
      .getMovies('TRENDING_MOVIE_DAY')
      .subscribe((resp: any) => {
        this.trendingMovies = resp.results.slice(0, 6);
        this.moviesDownloaded = false;
      });
    this.movieServivce.getMovies('TRENDING_TV').subscribe((resp: any) => {
      this.trendingTvShows = resp.results.slice(0, 6);
      this.moviesDownloaded = false;
    });
  }
}
