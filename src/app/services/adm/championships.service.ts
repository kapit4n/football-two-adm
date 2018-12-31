import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service'
import 'rxjs'; //get everything from Rx    

import { Observable, Subject, of, config } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {

  baseUrl: string;
  constructor(private http: HttpClient, private confSvc: ConfigService) {
    this.baseUrl = this.confSvc.baseUrl + '/' + this.confSvc.championshipUrl;
  }

  getAll(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .pipe(
        map((response: Response) => {
          return <any>response;
        })
      );
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(map((response: Response) => {
      return <any>response
    }
    ))
  }

  save(championship: any): Observable<any> {
      return this.http
        .post(this.baseUrl, championship)
        .pipe(
          map((response: Response) => {
            return <any>response;
          })
        );
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  
}
