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
  nowPlayingMovies: Imovie[] = [];
  upcomingMovies: Imovie[] = [];
  trendingMovies: Imovie[] = [];
  trendingTvShows: TvShow[] = [];
  moviesDownloaded = false;
  constructor(
    private movieServivce: MovieService,
    private tvService: TvService
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.movieServivce.getMovies('MOVIES_NOW', 6),
      this.movieServivce.getMovies('MOVIES_UPCOMING', 6),
      this.movieServivce.getMovies('TRENDING_MOVIE_DAY', 6),
      this.tvService.getTvTrending(6),
    ]).subscribe((resp: [Imovie[], Imovie[], Imovie[], TvShow[]]) => {
      this.nowPlayingMovies = resp[0];
      this.upcomingMovies = resp[1];
      this.trendingMovies = resp[2];
      this.trendingTvShows = resp[3];
      this.moviesDownloaded = true;
    });
  }
  //   this.movieServivce
  //     .getMovies('MOVIES_POPULAR')
  //     .subscribe((resp: Imovie[]) => {
  //       this.popularMovies = resp.slice(0, 3);
  //       this.moviesDownloaded = false;
  //     });
  //   this.movieServivce
  //     .getMovies('MOVIES_UPCOMING')
  //     .subscribe((resp: Imovie[]) => {
  //       this.upcomingMovies = resp.slice(0, 3);
  //       this.moviesDownloaded = false;
  //     });
  //   this.movieServivce
  //     .getMovies('TRENDING_MOVIE_DAY')
  //     .subscribe((resp: Imovie[]) => {
  //       this.trendingMovies = resp.slice(0, 6);
  //       this.moviesDownloaded = false;
  //     });
  //   this.movieServivce.getMovies('TRENDING_TV').subscribe((resp: Imovie[]) => {
  //     this.trendingTvShows = resp.slice(0, 6);
  //     this.moviesDownloaded = false;
  //   });
  // }
}
