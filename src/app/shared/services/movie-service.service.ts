import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';
import { ImovieDto } from 'src/app/models/Imovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(movieType: string, count: number = 20) {
    return this.http
      .get<ImovieDto>(env[movieType], {
        params: {
          api_key: API_KEY,
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results.slice(0, count));
        })
      );
  }
  getTv(tvType: string = 'TRENDING_TV', count: number = 20) {
    return this.http
      .get<ImovieDto>(env[tvType], {
        params: {
          api_key: API_KEY,
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results.slice(0, count));
        })
      );
  }

  getSearch(movieType: string = 'MOVIES_POPULAR', page: string) {
    return this.http
      .get<ImovieDto>(env[movieType], {
        params: {
          api_key: API_KEY,
          page,
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results);
        })
      );
  }
}
