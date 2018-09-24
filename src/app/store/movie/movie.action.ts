import { MovieState } 
 from './movie.state'; 

import Movie from '../../models/movie.model'; 

import {Action} 
 from '@ngrx/store'; 

export const GET_MOVIE = '[Movie] GET_MOVIE'; 

export const GET_MOVIE_SUCCESS = "[Movie] GET_MOVIE_SUCCESS"; 

export const GET_MOVIE_ERROR = "[Movie] GET_MOVIE_ERROR"; 


export const GET_MOVIES = '[Movie] GET_MOVIES'; 

export const GET_MOVIES_SUCCESS = '[Movie] GET_MOVIES_SUCCESS'; 

export const GET_MOVIES_ERROR = '[Movie] GET_MOVIES_ERROR'; 



export class GetMovies implements Action {
    readonly type = GET_MOVIES; 

} 


export class GetMoviesSuccess implements Action {
    readonly type = GET_MOVIES_SUCCESS; 


    constructor(public payload: MovieState[]){} 
; 

} 

export class GetMoviesError implements Action {
    readonly type = GET_MOVIES_ERROR;
} 



export class GetMovie implements Action {
    readonly type = GET_MOVIE; 


    constructor(payload: string){} 

} 


export class GetMovieSuccess implements Action {
    readonly type = GET_MOVIE_SUCCESS; 


    constructor(public payload: Movie){} 
; 

} 


export class GetMovieError implements Action {
    readonly type = GET_MOVIE_ERROR; 

} 



export type All = GetMovie | GetMovieSuccess | GetMovieError |
GetMovies | GetMoviesSuccess | GetMoviesError;