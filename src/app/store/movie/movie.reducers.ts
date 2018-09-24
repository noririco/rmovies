import Movie from '../../models/movie.model';
import { initializeMovieState, MovieListState, MovieState } from './movie.state';
import * as MovieActions from './movie.action';

export type Action = MovieActions.All;

const defaultMovieStates: MovieState[] = [
    {
        ...Movie.generateMockMovie(),
        ...initializeMovieState()
    }
]


const defaultState: MovieListState = {
    movies: defaultMovieStates,
    loading: false,
    pending: 0
}

export function MovieReducer(state = defaultState, action: Action) {

    switch (action.type) {
    
      
      
        case MovieActions.GET_MOVIES: {

            return { ...state, loaded: false, loading: true };
        }


        case MovieActions.GET_MOVIES_SUCCESS: {

            return {
                ...state,
                movies: [
                    ...action.payload,
                    defaultMovieStates[0]
                ],
                loading: false
            };
        }

    }
    
}
