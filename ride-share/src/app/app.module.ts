import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RideServiceService} from './ride-service.service';
import {HomeListComponent} from './home-list/home-list.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import{FormsModule}from'@angular/forms';
import { RideDetailsComponent } from './ride-details/ride-details.component';

@NgModule({
  declarations: [
    HomeListComponent,
    HomePageComponent,
    HeaderComponent,
    PostComponent,
    RideDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: HomeListComponent
      },
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'ride/:rideid',
        component: RideDetailsComponent
      }

    ])

  ],
  providers: [RideServiceService, 
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
