import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import {
  Icredits,
  IndividualMovie,
  Iphotos,
  Ivideos,
} from 'src/app/models/Imovie';
import { MovieService } from 'src/app/shared/services/movie-service.service';

@Injectable({
  providedIn: 'root',
})
export class MovieIdResolver
  implements Resolve<[IndividualMovie, Ivideos, Iphotos, Icredits]>
{
  constructor(private movieService: MovieService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<[IndividualMovie, Ivideos, Iphotos, Icredits]> {
    return forkJoin([
      this.movieService.getMovie(route.params['id']),
      this.movieService.getMovieVideos(route.params['id']),
      this.movieService.getMoviePhotos(route.params['id']),
      this.movieService.getMovieCredits(route.params['id']),
    ]);
  }
}
