import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../services/adm/teams.service'

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Array<any>;
  constructor(private teamsSvc: TeamsService) {
    this.teams = [];
  }

  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.teamsSvc.getAll().subscribe(data => this.teams = data)
  }

  delete(id: string) {
    this.teamsSvc.delete(id).subscribe(data => {
      this.loadData();
    });
  }

}