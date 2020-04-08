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
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    LinksComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    PaginationComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),

// FontAwesomeModule
  ],
  providers: [ConfigService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
