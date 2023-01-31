import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, forkJoin } from 'rxjs';
import imageSizess from 'src/app/constants/image-sizess';
import {
  Icredits,
  IndividualMovie,
  Iphotos,
  Ivideos,
} from 'src/app/models/Imovie';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: any;
  movieVideos: Ivideos;
  moviePhotos: Iphotos;
  imageSize = imageSizess;
  downloaded = false;
  credits: Icredits;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }: { id: number }) => {
      forkJoin([
        this.movieService.getMovie(id.toString()),
        this.movieService.getMovieVideos(id.toString()),
        this.movieService.getMoviePhotos(id.toString()),
        this.movieService.getMovieCredits(id.toString()),
      ]).subscribe((resp: [any, Ivideos, Iphotos, Icredits]) => {
        this.movie = resp[0];
        this.movieVideos = resp[1];
        this.moviePhotos = resp[2];
        this.credits = resp[3];
        this.downloaded = true;
      });
      // this.movieService.getMovie(id.toString()).subscribe((resp: any) => {
      //   this.movie = resp;
      // });
      // this.movieService
      //   .getMovieVideos(id.toString())
      //   .subscribe((resp: Ivideos) => {
      //     this.movieVideos = resp;
      //   });
      // this.movieService
      //   .getMoviePhotos(id.toString())
      //   .subscribe((resp: Iphotos) => {
      //     this.moviePhotos = resp;
      //   });
    });
  }
  ngOnDestroy(): void {}
}
