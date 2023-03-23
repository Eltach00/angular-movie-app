import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, forkJoin } from 'rxjs';
import imageSizess from 'src/app/constants/image-sizess';
import {
  Icredits,
  Imovie,
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
  movie: IndividualMovie;
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
    this.route.data.subscribe(
      ({
        movieAllData,
      }: {
        movieAllData: [IndividualMovie, Ivideos, Iphotos, Icredits];
      }) => {
        this.movie = movieAllData[0];
        this.movieVideos = movieAllData[1];
        this.moviePhotos = movieAllData[2];
        this.credits = movieAllData[3];
        this.downloaded = true;
      }
    );
  }
  ngOnDestroy(): void {}
}
