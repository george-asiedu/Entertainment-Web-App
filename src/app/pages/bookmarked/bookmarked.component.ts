import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-bookmarked',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.scss'
})
export class BookmarkedComponent {

}
