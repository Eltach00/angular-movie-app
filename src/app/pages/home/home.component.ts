import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = [];
  moviesDownloaded = false;
  constructor(private movieServivce: MovieService) {}

  ngOnInit(): void {
    this.movieServivce.getMovies().subscribe((resp: any) => {
      console.log(resp);

      this.movies = resp.results.slice(0, 3);
      this.moviesDownloaded = true;
    });
  }
}
