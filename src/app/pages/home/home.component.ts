import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Imovie, ImovieDto } from 'src/app/models/Imovie';
import { TvShow } from 'src/app/models/TvModels';
import { MovieService } from 'src/app/shared/services/movie-service.service';
import { TvService } from 'src/app/shared/services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // nowPlayingMovies: Imovie[] = [];
  // upcomingMovies: Imovie[] = [];
  trendingMovies: Imovie[] = [];
  trendingTvShows: TvShow[] = [];
  tvAnimation: TvShow[] = [];
  moviesDownloaded = false;
  constructor(
    private movieServivce: MovieService,
    private tvService: TvService
  ) {}

  ngOnInit(): void {
    forkJoin([
      // this.movieServivce.getMovies('MOVIES_NOW', 12),
      // this.movieServivce.getMovies('MOVIES_UPCOMING', 12),
      this.movieServivce.getMovies('TRENDING_MOVIE_DAY', 12),
      this.tvService.getTvTrending(12),
      this.tvService.getTvAnimation(12),
    ]).subscribe(
      (resp: [Imovie[], TvShow[], TvShow[]]) => {
        // this.nowPlayingMovies = resp[0];
        // this.upcomingMovies = resp[1];
        this.trendingMovies = resp[0];
        this.trendingTvShows = resp[1];
        this.tvAnimation = resp[2];
        this.moviesDownloaded = true;
      },
      (err) => {
        console.log('Http Error:', err);
      }
    );
  }

  handleRemoveAnime(event) {
    this.tvAnimation = this.tvAnimation.filter((item) => item.id != event.id);
  }
  handleRemoveMovies(event) {
    this.trendingMovies = this.trendingMovies.filter(
      (item) => item.id != event.id
    );
  }
  handleRemoveTvShows(event) {
    this.trendingTvShows = this.trendingTvShows.filter(
      (item) => item.id != event.id
    );
  }
}
