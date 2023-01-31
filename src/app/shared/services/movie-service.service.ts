import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';
import {
  Icredits,
  Igenres,
  ImovieDto,
  Iphotos,
  Ivideos,
} from 'src/app/models/Imovie';

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
  getMovie(id: string) {
    return this.http.get(env['MOVIE'] + id, {
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
      .get<ImovieDto>(env.DISCOVER, {
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

  getMovieCredits(id: string): Observable<Icredits> {
    return this.http.get<Icredits>(env['MOVIE'] + id + '/credits', {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
