import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service'
import 'rxjs'; //get everything from Rx    

import { Observable, Subject, of, config } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

export class CrudService {

  public baseUrl: string;
  public include: string;
  constructor(public http: HttpClient, public confSvc: ConfigService) { }

  getAll(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .pipe(
        map((response: Response) => {
          return <any>response;
        })
      );
  }

  getAllIncl(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}?${this.include}`)
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

  getByIdIncl(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?${this.include}`).pipe(map((response: Response) => {
      return <any>response
    }
    ))
  }

  save(data: any): Observable<any> {
    return this.http
      .post(this.baseUrl, data)
      .pipe(
        map((response: Response) => {
          return <any>response;
        })
      );
  }

  update(id: string, data: any): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/${id}`, data)
      .pipe(
        map((response: Response) => {
          return <any>response;
        })
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
