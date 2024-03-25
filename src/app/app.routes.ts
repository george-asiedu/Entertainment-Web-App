import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


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
    }
];
