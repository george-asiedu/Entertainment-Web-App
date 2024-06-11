import { Component, OnInit } from '@angular/core';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [FormsModule, SidebarComponent, MovieListComponent, NgFor],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent implements OnInit {
  series: Netflix[] = []
  search: string = ''
  searchResultCount: number = 0

  constructor(private ns: NetflixService) {}

  ngOnInit(): void {
      this.ns.getMovies().subscribe(
        (movie) => {
          this.series = movie.filter(mov => mov.category.includes('TV Series'))
        }
      )
  }

  searchList(): void {
    if(this.search === '') {
      this.ngOnInit()
    } else {
        const searchTerm = this.search.toLowerCase()
        this.series = this.series.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm)
      })
      this.searchResultCount = this.series.length
    }
  }
}