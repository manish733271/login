import { Component } from '@angular/core';
import { Auth } from './services/auth.service'; 
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})

export class AppComponent {

  constructor(private auth: Auth, private spotifyService: SpotifyService){

  }
 
}
