import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileTotalComponent } from './profile-total/profile-total.component';
import { ProfileComponent } from './profile/profile';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileTotalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  //wrong input, redirect main page
  { path: '***', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
