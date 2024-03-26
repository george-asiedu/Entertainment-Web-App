import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Netflix } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movieItems: Netflix[] = []
  search: any;

  constructor(private netflixService: NetflixService) {}

  ngOnInit(): void {
      this.netflixService.getMovies().subscribe(
        (response) => {
          this.movieItems = response
        }
      )
  }

  searchlist(): void {
    if(this.search === '') {
      this.ngOnInit()
    } else {
      this.movieItems = this.movieItems.filter((item) => {
        return item.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}