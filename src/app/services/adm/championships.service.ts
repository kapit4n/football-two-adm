import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service'
import 'rxjs'; //get everything from Rx    
import { Observable, Subject, of, config } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService extends CrudService {
  chamTeamUrl: string;
  constructor(public http: HttpClient, public confSvc: ConfigService) {
    super(http, confSvc);
    this.baseUrl = this.confSvc.baseUrl + '/' + this.confSvc.championshipUrl;
    this.chamTeamUrl = this.confSvc.baseUrl + "/" + "chamTeams"
    this.include = 'filter[include]=teams';
  }

  getChamTeams(cId: string): Observable<any> {
    return this.http.get(`${this.chamTeamUrl}?filter[include]=team&filter[where][championshipId]=${cId}`).pipe(map((response: Response) => {
      return <any>response
    }
    ))
  }

  addTeam(data: any): Observable<any> {
    return this.http
      .post(this.chamTeamUrl, data)
      .pipe(
        map((response: Response) => {
          return <any>response;
        })
      );
  }
}
