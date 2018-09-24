import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  movieId :string;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.movie = new Movie();
    this.route.params.subscribe(params => {
      this.movieId = params['id']; // (+) converts string 'id' to a number

      // this.movie = this.movieService.GetMovie(this.movieId);
      this.movieService.GetMovie(this.movieId).subscribe(v=> {
        this.movie = v;
      }
    );
   });
  }

}
