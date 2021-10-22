import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Games[] = [];
  constructor(private gamesDataService: GamesDataService) { }

  game = new Games();
  
  offset = 0;

  ngOnInit(): void {
    this.gamesDataService.getGames(this.offset).then(response => this.games = response)
  }


  getAll(value:number){

      this.gamesDataService.getGames(this.offset).then(response => this.games = response)

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

export class Games {
  _id!: string;
  price!: number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  title!: string;
  rate!:number
}
