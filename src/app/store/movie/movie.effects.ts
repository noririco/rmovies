
import { MovieState } from './movie.state';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import * as MovieActions from './movie.action';
import { MovieService } from '../../services/movie.service';



@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) { }

//   @Effect()
//   GetMovies$: Observable<Action> = this.actions$.
//     ofType<MovieActions.GetMovies>(MovieActions.GET_MOVIES)
//     .pipe(
//      mergeMap(action =>
//         this.movieService.GetMovies()
//           .map((data: Response) => {
  
//             console.log(data);
//             return new MovieActions.GetMoviesSuccess(data["data"]["docs"] as MovieState[]);
//           })
//           .catch(() => of(new MovieActions.GetMovieError()))
//       )
//     );
}