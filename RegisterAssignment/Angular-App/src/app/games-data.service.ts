import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Games } from './games/games.component';
import { Game } from './game/game.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl: string = "http://localhost:3000/api"
  constructor(private httpClient: HttpClient) { }

  public getGames(offset:number): Promise<Games[]> {
    const url: string = this.apiBaseUrl + "/games?offset="+offset;
    return this.httpClient.get(url).toPromise()
      .then(respose => respose as Games[])
      .catch(this.handleError);
  }

  public getGame(id:string):Promise<Game>{
    const url: string = this.apiBaseUrl+"/games/"+id;
    return this.httpClient.get(url).toPromise()
    .then(response=> response as Game)
    .catch(this.handleError);
  }

  public addUser(user:User):Promise<User>{
    const url: string = this.apiBaseUrl + "/users";
    return this.httpClient.post(url, user).toPromise()
    .then(response=> response as User)
    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong", error);
    return Promise.reject(error.message || error);
  }

}
