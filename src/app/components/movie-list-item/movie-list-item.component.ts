import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Movie from '../../models/movie.model';
@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {
  movieId : string;
  @Input() movie: Movie;
  @Output() selected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  selectItem() {
    this.selected.emit(this.movie.id);
  }

}
