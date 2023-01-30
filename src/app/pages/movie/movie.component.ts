import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }: { id: number }) => {
      this.movieService.getMovie(id.toString()).subscribe((resp) => {
        console.log(resp);
        this.movie = resp;
      });
    });
  }
}
