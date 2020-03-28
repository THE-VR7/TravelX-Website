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
import { LinksComponent } from './aboutus/links/links.component';
import { ConfigService } from './config.service';


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
    PackageComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
