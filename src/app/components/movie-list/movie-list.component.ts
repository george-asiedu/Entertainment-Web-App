import { Component, Input } from '@angular/core';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movieList!: Netflix;

  constructor(private ns: NetflixService) {}

  addToBookmark(movieList: Netflix) {
    if(movieList.isBookmarked) {
      movieList.isBookmarked = false
      this.ns.addToBookmark(movieList)
    } else {
      movieList.isBookmarked = true
      this.ns.addToBookmark(movieList)
    }
  }
}