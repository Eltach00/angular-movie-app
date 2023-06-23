import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';
import {
  Icredits,
  Igenres,
  ImovieDto,
  IndividualMovie,
  Iphotos,
  Ivideos,
} from 'src/app/models/Imovie';
import { SHOULD_NOT_HANDLE_ERROR } from '../interceptor/app.interceptor';

const headers = { 'should-not-handle-error': 'true' };

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(movieType: string, count: number = 20) {
    const context = new HttpContext().set(SHOULD_NOT_HANDLE_ERROR, true);
    return this.http
      .get<ImovieDto>(env[movieType], {
        params: {
          api_key: API_KEY,
        },
        context,
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results.slice(0, count));
        })
      );
  }
  getMovie(id: string): Observable<IndividualMovie> {
    return this.http.get<IndividualMovie>(env['MOVIE'] + id, {
      params: {
        api_key: API_KEY,
      },
    });
  }
  getMovieVideos(id: string): Observable<Ivideos> {
    return this.http.get<Ivideos>(env['MOVIE'] + id + '/videos', {
      params: {
        api_key: API_KEY,
      },
    });
  }
  getMoviePhotos(id: string): Observable<Iphotos> {
    return this.http.get<Iphotos>(env['MOVIE'] + id + '/images', {
      params: {
        api_key: API_KEY,
      },
    });
  }

  getSearch(page: string) {
    return this.http
      .get<ImovieDto>(env['MOVIES_POPULAR'], {
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
  getGenre() {
    return this.http.get<Igenres>(env.GENRE, {
      params: {
        api_key: API_KEY,
      },
    });
  }

  getMoviesDiscover(genreId: string, page: number) {
    return this.http
      .get<ImovieDto>(env.DISCOVER_MOVIE, {
        params: {
          api_key: API_KEY,
          with_genres: genreId,
          page,
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results);
        })
      );
  }
  getMoviesSearch(query: string, page: number) {
    return this.http
      .get<ImovieDto>(env.SEARCH_MOVIE, {
        params: {
          api_key: API_KEY,
          query,
          page,
          language: 'en',
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results);
        })
      );
  }

  getMovieCredits(id: string): Observable<Icredits> {
    return this.http.get<Icredits>(env['MOVIE'] + id + '/credits', {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
