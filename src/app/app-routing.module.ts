import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
      redirectTo: '/movies',
      pathMatch: 'full'
  },
  { path: 'movies/:id', component: MovieDetailsComponent },
  {
    path: 'movies',
    component: MovieListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
