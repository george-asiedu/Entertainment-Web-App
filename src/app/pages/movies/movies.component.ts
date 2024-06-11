import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SidebarComponent, FormsModule, NgFor, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movies: Netflix[] = []
  search: string = ''
  searchResultCount: number = 0

  constructor(private ns: NetflixService) {}

  ngOnInit(): void {
      this.ns.getMovies().subscribe(
        (movie) => {
          this.movies = movie.filter(mov => mov.category.includes('Movie'))
        }
      )
  }

  searchList(): void {
    if(this.search === '') {
      this.ngOnInit()
    } else {
        const searchTerm = this.search.toLowerCase()
        this.movies = this.movies.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm)
      })
      this.searchResultCount = this.movies.length
    }
  }
}