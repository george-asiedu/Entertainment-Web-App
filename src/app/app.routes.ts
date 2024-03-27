import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';


export const routes: Routes = [
    {
        path: 'signup',
        title: 'Frontend Mentor | Entertainment Web App - Signup',
        component: SignupComponent
    },
    {
        path: '',
        title: 'Frontend Mentor | Entertainment Web App - Login',
        component: LoginComponent
    },
    {
        path: 'home',
        title: 'Frontend Mentor | Entertainment Web App - Home',
        component: HomeComponent
    },
    {
        path: 'movies',
        title: 'Frontend Mentor | Entertainment Web App - Movies',
        component: MoviesComponent
    },
    {
        path: 'series',
        title: 'Frontend Mentor | Entertainment Web App - TV Series',
        component: SeriesComponent
    }
];
