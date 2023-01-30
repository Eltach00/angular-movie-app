import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from 'src/app/environment/api_key';
import { env } from 'src/app/environment/env';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(movieType: string) {
    return this.http.get(env[movieType], {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
