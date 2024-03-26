import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Signup } from '../../model/netflix';
import { NetflixService } from '../../service/netflix.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, FontAwesomeModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user: Signup = { email: '', password: '', repeatPassword: ''}
  passwordMatch: boolean = true
  isSignedIn: boolean = false
  faSquareCheck = faSquareCheck
  faCircleXmark = faCircleXmark

  constructor(private netflixService: NetflixService, private router: Router) {}

  signUp() {
    if(this.passwordMatch) {
      this.netflixService.postUsers(this.user).subscribe(
        (response) => {
          console.log('Signup Successful: ', response)
          this.isSignedIn = true
          this.router.navigate([''])
        }, 
        (error) => {
          console.error("Signup Error: ", error)
          this.isSignedIn = false
        }
      )
    } else {
      console.error('Passwords do not match')
    }
  }

  checkPassword() {
    this.passwordMatch = this.user.password === this.user.repeatPassword
  }
}
