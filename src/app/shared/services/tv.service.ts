import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';
import { ITvDto, ITvshowsResults, TvShow } from 'src/app/models/TvModels';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private http: HttpClient) {}

  getTvAnimation(count = 10) {
    return this.http
      .get<ITvshowsResults>(env.DISCOVER_TV, {
        params: {
          api_key: API_KEY,
          with_genres: 16,
          with_original_language: 'ja',
        },
      })
      .pipe(
        switchMap((resp) => {
          return of(resp.results.slice(0, count));
        })
      );
  }

  getTvTrending(count: number = 20) {
    return this.http
      .get<ITvDto>(env.TRENDING_TV, {
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

  getTvshows(page): Observable<TvShow[]> {
    return this.http
      .get<ITvshowsResults>(env.TV_SHOWS_TOP, {
        params: {
          api_key: API_KEY,
          page,
        },
      })
      .pipe(
        switchMap((resp: ITvshowsResults) => {
          return of(resp.results);
        })
      );
  }

  getTvSearch(query: string, page: number): Observable<TvShow[]> {
    return this.http
      .get<ITvshowsResults>(env.SEARCH_TV, {
        params: {
          api_key: API_KEY,
          page,
          query,
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
    return this.http.get(env.TV_SHOW + id + '/videos', {
      params: {
        api_key: API_KEY,
      },
    });
  }
  getTvCredits(id: string) {
    return this.http.get(env.TV_SHOW + id + '/credits', {
      params: {
        api_key: API_KEY,
      },
    });
  }
  getTvImages(id: string) {
    return this.http.get(env.TV_SHOW + id + '/images', {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
