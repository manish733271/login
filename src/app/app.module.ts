import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components//home/home.component';

import { routing, appRoutingProviders } from './app.routing';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './services/auth.service'; 

import { AuthGuard } from './auth.guard';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
