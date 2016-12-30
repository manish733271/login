import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Artist } from '../../artist';
import { SpotifyService } from '../../services/spotify.service';

// import { Auth } from '../../services/auth.service'; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: []
  
})

export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];

  //inject two things in constructor - spotifyservice and activated route
  constructor(
    private _spotifyService:SpotifyService, private _route: ActivatedRoute) {
      
   }


  ngOnInit() {
    this._route.params
      .map(params=>params['id'])
      .subscribe((id) =>{
          this._spotifyService.getArtist(id) 
            .subscribe(a => {
              this.artist = a;
            })  
      });
  }

}