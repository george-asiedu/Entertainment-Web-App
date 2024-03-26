import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials: Login = { email: '', password: '' }
  error: string = ''
  isLoggedIn: boolean = false
  faSquareCheck = faSquareCheck
  faCircleXmark = faCircleXmark

  constructor(private netflixService: NetflixService, private router: Router) {}

  login() {
    this.netflixService.userLogin(this.credentials).subscribe(
      (response) => {
        console.log('Login Successful: ', response)
        this.isLoggedIn = true
        this.router.navigate(['/home'])
      }, 
      (error) => {
        console.error("Login Error: ", error)
        this.error = 'Invalid email or password'
        this.isLoggedIn = false
      }
    )
  }
}