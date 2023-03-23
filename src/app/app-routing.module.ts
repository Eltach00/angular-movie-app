import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { TestComponent } from './components/test/test.component';
import { TestGuard } from './components/test/auth/test.guard';
import { MovieIdResolver } from './components/resolver/movie-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'movies/genre/:genreId',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movieAllData: MovieIdResolver,
    },
  },
  {
    path: 'tvshows',
    component: TvshowsComponent,
  },
  {
    path: 'tvshow/:id',
    component: TvshowComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
