import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bookmarked',
  standalone: true,
  imports: [SidebarComponent, FormsModule, MovieListComponent, NgFor],
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.scss'
})
export class BookmarkedComponent implements OnInit {
  bookmarkedItems: Netflix[] = []
  bookmarkedMovies: Netflix[] = []
  bookmarkedSeries: Netflix[] = []
  search: string = ''
  searchResultCount: number = 0

  constructor(private netflixService: NetflixService) {}

  ngOnInit(): void {
      this.netflixService.getMovies().subscribe(
        (response) => {
          this.bookmarkedMovies = response.filter(movie => movie.category.includes('Movie') && movie.isBookmarked)
          this.bookmarkedSeries = response.filter(tv => tv.category.includes('TV Series') && tv.isBookmarked)
        }
      )
  }

  searchList(): void {
    if(this.search) {
      const searchItem = this.search.toLowerCase()
      this.bookmarkedMovies = this.bookmarkedMovies.filter(item => item.title.toLowerCase().includes(searchItem))
      this.searchResultCount = this.bookmarkedMovies.length
    }
    if(this.search) {
      const searchItem = this.search.toLowerCase()
      this.bookmarkedSeries = this.bookmarkedSeries.filter(item => item.title.toLowerCase().includes(searchItem))
      this.searchResultCount = this.bookmarkedSeries.length
    } else {
      this.ngOnInit()
    }
  }
}