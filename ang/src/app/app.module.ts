import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { BannerComponent } from './banner/banner.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TourpackagesComponent } from './tourpackages/tourpackages.component';
import { PackageComponent } from './tourpackages/package/package.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HeaderComponent,
    FeaturesComponent,
    BannerComponent,
    FeedbackComponent,
    SliderComponent,
    LoginComponent,
    SignupComponent,
    TourpackagesComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
