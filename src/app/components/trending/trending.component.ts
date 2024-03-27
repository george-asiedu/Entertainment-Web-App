import { Component, Input, OnInit } from '@angular/core';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent implements OnInit {
  // @Input() trendingList!: Netflix;
  trending: Netflix[] = []

  constructor(private netflixService: NetflixService) {}

  ngOnInit(): void {
      this.netflixService.getMovies().subscribe(
        (response) => {
          this.trending = response.filter(( trends => trends.isTrending ))
        }
      )
  }
}