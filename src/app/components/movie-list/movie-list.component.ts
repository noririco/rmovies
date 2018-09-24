import { MovieService } from './../../services/movie.service';
import { Component, OnInit} from '@angular/core';
import Movie from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  moviesSortedByYear: Movie[];
  searchText: string;
  constructor(private movieService: MovieService, private router: Router) { }
  
  ngOnInit() {
    this.movieService.GetMovies().subscribe(v=> {
        this.movies = v;
      }
    );
  }

  OnSelectedListItem(event) {
    this.router.navigate(['/movies/'+event]);
  }

}
