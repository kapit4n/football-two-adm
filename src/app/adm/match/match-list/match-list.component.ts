import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../../services/adm/matches.service'

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: Array<any>;
  constructor(private matchesSvc: MatchesService) {
    this.matches = [];
  }

  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.matchesSvc.getAll().subscribe(data => this.matches = data)
  }

  delete(id: string) {
    this.matchesSvc.delete(id).subscribe(data => {
      this.loadData();
    });
  }

}