import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';
import { ITvshowsResults, TvShow } from 'src/app/models/TvModels';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private http: HttpClient) {}

  getTvshows(): Observable<TvShow[]> {
    return this.http
      .get<ITvshowsResults>(env.TV_SHOWS, {
        params: {
          api_key: API_KEY,
        },
      })
      .pipe(
        switchMap((resp: ITvshowsResults) => {
          return of(resp.results);
        })
      );
  }

  getTvShow(id: string) {
    return this.http.get(env.TV_SHOW + id, {
      params: {
        api_key: API_KEY,
      },
    });
  }

  getTvVideos(id: string) {
    return this.http.get(env.TV_SHOW + id + '/vidoes', {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
