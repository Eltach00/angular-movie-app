import { Component, OnInit } from '@angular/core';
import { Igenre, Igenres } from 'src/app/models/Imovie';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Igenre[];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getGenre().subscribe((resp: Igenres) => {
      this.genres = resp.genres;
    });
  }
}
