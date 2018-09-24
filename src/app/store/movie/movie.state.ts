import Movie from '../../models/movie.model';

export interface MovieState extends Movie{
    loading:boolean;
    selected: boolean;
    refreshing:boolean;
    error: boolean;
}

export  const initializeMovieState  = function() {
    return {
        loading: false,
        selected: false,
        refreshing:false,
        error: false,
    }
}

export interface MovieListState{
    movies: MovieState[];
    loading: boolean;
    pending: number;
}

export const  initializeMovieListState = function(){
    return {
        loading: false,
        pending: 0,
    }
}