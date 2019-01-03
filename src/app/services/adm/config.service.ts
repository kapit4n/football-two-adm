import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  baseUrl = "http://localhost:3000/api";
  championshipUrl = "championships";
  teamUrl = "teams";
  playerUrl = "players";
  matchUrl = "matches";

  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
