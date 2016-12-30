import { Component, OnInit } from '@angular/core';
import { Artist } from '../../artist';
import { SpotifyService } from '../../services/spotify.service';
// import { Auth } from '../../services/auth.service'; 
// import {AuthHttp} from 'angular2-jwt';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
 
})
export class SearchComponent implements OnInit {

   searchStr: string;
    // message: string;

  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService){

  }
  
  searchMusic(){
    //  console.log(this.searchStr);
     this._spotifyService.searchMusic(this.searchStr).
     subscribe(
      //  console.log(res);
       res => { this.searchRes = res.artists.items} 
      //  error => { this.message = error._body || error }
     );
  }

  ngOnInit() {
  }

}
