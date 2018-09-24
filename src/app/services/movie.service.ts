
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Movie from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({responseType:'text', Accept: 'text/html'});
  }
  
  public GetMovies() : Observable<Movie[]>{
    return this.http.get<Movie[]>('/api/exam/allMovies/allMovies.txt',{headers: this.headers})
        .pipe(
          map(res => res['movies']),
          tap(t => t.sort((x,y) => parseInt(x.year, 10) < parseInt(y.year, 10) ? 1 : -1))
          );
  }
        
  public GetMovie(movieId) : Observable<Movie>{
    return this.http.get<Movie>('/api/exam/descriptionMovies/'+movieId+'.txt',{headers: this.headers})
      .pipe(
        tap(res => {
          if(res.promoUrl) {
            let fixUrlPrefix = "https://www.youtube.com/embed/";
            let videoId = res.promoUrl.match(/\=(.*)/)[1];
            res.promoUrl = fixUrlPrefix + videoId;
          }
        })
      );
    }
  }
  
  // const MOVIES = {"movies":[
  //   {"id":"1000", "name":"Suicide Squad","year":"2016","category":"action"},
  //   {"id":"1001", "name":"Batman v Superman: Dawn of Justice","year":"2016","category":"action"},
  //   {"id":"1002", "name":"Focus","year":"2015","category":"comedy"},
  //   {"id":"1003", "name":"Bajrangi Bhaijaan","year":"2015","category":"comedy"},
  //   {"id":"1004", "name":"The Dark Knight","year":"2008","category":"drama"},
  //   {"id":"1005", "name":"Harry Potter veotzarot hamavet","year":"2011","category":"Fantasy"},
  //   {"id":"1006", "name":"Hasandak ","year":"1972","category":"Crime"},
  //   {"id":"1007", "name":"Fight Club","year":"19999","category":"Drama"},
  //   {"id":"1008", "name":"Ra'kevet ha'kerakh","year":"2013","category":"action"},
  //   {"id":"1009", "name":"Gladiator","year":"2000","category":"Drama"}
  // ]};
  
  // const MOVIE = {"id":"1001", "name":"Batman v Superman: Dawn of Justice","year":"2016","category":"action","description":"Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis' most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1001.jpg","promoUrl":"https://www.youtube.com/watch?v=0WWzgGyAH6Y","rate":"8","hour":"23:00"}