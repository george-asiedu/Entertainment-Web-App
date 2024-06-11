import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TrendingComponent } from '../../components/trending/trending.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, FormsModule, CommonModule, TrendingComponent, MovieListComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movieItems: Netflix[] = []
  search: string = ''
  trendingList: Netflix[] = []
  searchResultCount: number = 0
  bookmarked: Set<string> = new Set()

  constructor(private netflixService: NetflixService) {}

  ngOnInit(): void {
      this.netflixService.getMovies().subscribe(
        (response) => {
          this.movieItems = response.map(item => ({...item, isBookmarked: this.bookmarked.has(item.id)}))
          this.trendingList = response.filter((trends => trends.isTrending))
        }
      )
  }

  searchList(): void {
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

  // addToBookmark(item: Netflix): void {
  //   if(!this.bookmarked.has(item.id)) {
  //     this.netflixService.addToBookmark(item).subscribe({
  //       next: (response) => {
  //         console.log('Added to bookmark:', response);
  //         item.isBookmarked = true;
  //         this.bookmarked.add(item.id);
  //       },
  //       error: (error) => {
  //         console.error('Error adding to bookmark:', error);
  //       }
  //     });
  //   }
    // else {
    //   this.netflixService.removeFromBookmark(item.id).subscribe({
    //     next: (response) => {
    //       console.log('Removed from bookmark:', response);
    //       item.isBookmarked = false;
    //       this.bookmarked.delete(item.id);
    //     },
    //     error: (error) => {
    //       console.error('Error removing from bookmark:', error);
    //     }
    //   })
    // }

}