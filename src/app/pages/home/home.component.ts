import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from '../../components/trending/trending.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, FormsModule, CommonModule, TrendingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movieItems: Netflix[] = []
  search: string = ''
  trendingList: Netflix[] = []
  searchResultCount: number = 0

  constructor(private netflixService: NetflixService) {}

  ngOnInit(): void {
      this.netflixService.getMovies().subscribe(
        (response) => {
          this.movieItems = response
          this.trendingList = response.filter((trends => trends.isTrending))
        }
      )
  }

  searchlist(): void {
    if(this.search === '') {
      this.ngOnInit()
    } else {
        const searchTerm = this.search.toLowerCase()
        this.movieItems = this.movieItems.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm)
      })
      this.searchResultCount = this.movieItems.length
    }
  }
}