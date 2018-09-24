import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { YoutubeSanitizerPipe } from './pipes/youtube-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieListItemComponent,
    PageNotFoundComponent,
    SearchFilterPipe,
    YoutubeSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
