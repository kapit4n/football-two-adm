import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service'
import 'rxjs'; //get everything from Rx    

import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService extends CrudService {

  constructor(public http: HttpClient, public confSvc: ConfigService) {
    super(http, confSvc);
    this.baseUrl = this.confSvc.baseUrl + '/' + this.confSvc.matchUrl;
    this.include = "filter[include]=visit&filter[include]=local"
  }
}
