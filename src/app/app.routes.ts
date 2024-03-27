import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';


export const routes: Routes = [
    {
        path: 'signup',
        title: 'Frontend Mentor | Signup',
        component: SignupComponent
    },
    {
        path: '',
        title: 'Frontend Mentor | Login',
        component: LoginComponent
    },
    {
        path: 'home',
        title: 'Frontend Mentor | Home',
        component: HomeComponent
    },
    {
        path: 'movies',
        title: 'Frontend Mentor | Movies',
        component: MoviesComponent
    }
];
