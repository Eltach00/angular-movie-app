import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoComponent } from './components/video/video.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { SearchPipe } from './pipes/search.pipe';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { CredtsComponent } from './components/credts/credts.component';
import { OverviewComponent } from './components/overview/overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestModule } from './appTest.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    GenresComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoComponent,
    SearchPipe,
    TvshowComponent,
    CredtsComponent,
    OverviewComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TestModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
