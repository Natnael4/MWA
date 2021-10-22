import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  err!:string;
  message!:string;
  constructor(private _gamesDataService:GamesDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("User form submitted");
    if(!this.user.username || !this.user.password || !this.user.name || !this.user.passwordRepeat){
      this.err="Make sure you fill all the fields"
    }else if(this.user.password!==this.user.passwordRepeat){
      this.err = "Passwords have to match.";
    }
    else{
      this._gamesDataService.addUser(this.user);
      this.message = "Successful registrated";
      this.err="";
    }
     
  }

}

export class User{
  username!:string;
  password!:string;
  name!:string;
  passwordRepeat!:string
}
