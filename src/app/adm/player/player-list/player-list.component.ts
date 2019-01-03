import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/adm/players.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Array<any>;
  constructor(private playersSvc: PlayersService) {
    this.players = [];
  }

  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.playersSvc.getAll().subscribe(data => this.players = data)
  }

  delete(id: string) {
    this.playersSvc.delete(id).subscribe(data => {
      this.loadData();
    });
  }

}
