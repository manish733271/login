import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Auth } from './auth.service'; 
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';


@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string; //after routing
  
  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {

   }  


   searchMusic(str:string, type='artist'){
      this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
      return this.http.get(`${this.searchUrl}`)
        .map(res=>res.json());    
   }

   getArtist(id:string){
     this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this.http.get(`${this.artistUrl}`)
        .map(res=>res.json()); 

   }

//    getAlbums(artistId:string){
//       this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
//       return this._http.get(this.albumsUrl)
//         .map(res=>res.json()); 
//    }

//     getAlbum(id:string){
//       this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
//       return this._http.get(this.albumUrl)
//         .map(res=>res.json()); 
//    }
 
}
