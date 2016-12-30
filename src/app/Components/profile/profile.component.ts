import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [Auth]
})
export class ProfileComponent implements OnInit {

  userProfile: Object;

  constructor(private auth: Auth){
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.userProfile);

  }

  ngOnInit() {
  }

}
