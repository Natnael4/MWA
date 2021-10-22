import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  constructor(private _gamesDataService: GamesDataService) { }

  game = new Game();
  err!:string;
  message!:string;
  offset = 0;

  ngOnInit(): void {
    this._gamesDataService.getGames(this.offset).then(response => this.games = response)
  }

  onSubmit(): void {
    console.log("Form submitted");
    console.log("Form values", this.game);
    if(!this.game.title || !this.game.price){
      this.err = "Please add a Title or Price";
      this.message="";
    }else{
      this._gamesDataService.addGame(this.game);
      this.message = "Game successfully added";
      this.err="";
      setTimeout(()=>{
        this.message=""
      },1000);
    }
  }

  getAll(value:number){
    // if(!value){
    //   this.offset=0;
      this._gamesDataService.getGames(this.offset).then(response => this.games = response)
    // }
  }

  next():void{
    this.offset+=5;
    if(this.games.length<5){
      this.offset=0;
    }
    this.getAll(this.offset);
  }
  prev():void{
    this.offset-=6;
    if(this.offset<0){
      this.offset = 0;
    }
    this.getAll(this.offset)
  }

}

export class Game {
  _id!: string;
  price!: number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  title!: string;
  rate!:number
}
