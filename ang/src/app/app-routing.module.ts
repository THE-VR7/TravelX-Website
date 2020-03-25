import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TourpackagesComponent } from './tourpackages/tourpackages.component';
import { PackageComponent } from './tourpackages/package/package.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'home', component: SliderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'tourpackage', component: TourpackagesComponent},
  { path: 'package', component: PackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
