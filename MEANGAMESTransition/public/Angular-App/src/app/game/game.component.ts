import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { GamesDataService } from '../games-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game!:game;
  updategame = new Game();
  err!:string;
  message!:string;
  // ratingArray!: any[];
  constructor(private _gamesDataService:GamesDataService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.params['gameId'];
    this._gamesDataService.getGame(id).then(response=>this.game=response);
    // this.ratingArray = new Array(this.game.rate);
  }

  onSubmit(): void{
    console.log("Form values",this.game);
    if(!this.game.title || !this.game.price){
      this.err = "Please fill the empty fields";
    }else{
      const id = this._route.snapshot.params['gameId'];
      this._gamesDataService.updateGame(id,this.game);
      this.message = "Game updated";
      setTimeout(()=>{
        this.message=""
      },1000);
    }
  }

  deleteGame(gameId:string){
    this._gamesDataService.deleteGame(gameId);
  }

}

export class game{
  _id!:string;
  price!:number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  title!:string;
  rate!:number
}
