import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game!:Game;

  constructor(private gamesDataService:GamesDataService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.params['gameId'];
    this.gamesDataService.getGame(id).then(response=>this.game=response);

  }

}

export class Game{
  _id!:string;
  price!:number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  title!:string;
  rate!:number
}
