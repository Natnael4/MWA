import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Game } from './games/games.component';
import { game } from './game/game.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl: string = "http://localhost:3000/api"
  constructor(private httpClient: HttpClient) { }

  public getGames(offset:number): Promise<Game[]> {
    const url: string = this.apiBaseUrl + "/games?offset="+offset;
    return this.httpClient.get(url).toPromise()
      .then(respose => respose as Game[])
      .catch(this.handleError);
  }

  public getGame(id:string):Promise<game>{
    const url: string = this.apiBaseUrl+"/games/"+id;
    return this.httpClient.get(url).toPromise()
    .then(response=> response as game)
    .catch(this.handleError);
  }

  public addGame(game:Game):Promise<Game>{
    const url: string = this.apiBaseUrl + "/games";
    return this.httpClient.post(url, game).toPromise()
    .then(response=> response as game)
    .catch(this.handleError);
  }

  public updateGame(id:string,game:Game):Promise<Game>{
    const url: string = this.apiBaseUrl+"/games/"+id;
    return this.httpClient.put(url,game).toPromise()
    .then(response=> response as game)
    .catch(this.handleError);
  }

  public deleteGame(id:string):Promise<game>{
    const url: string = this.apiBaseUrl+"/games/"+id;
    return this.httpClient.delete(url).toPromise()
    .then(response=> response as game)
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
