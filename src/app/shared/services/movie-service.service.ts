import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(env.MOVIES_UPCOMING, {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
