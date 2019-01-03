import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { PlayersService } from '../../../services/adm/players.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  id: string;
  data: any;
  constructor(private playersSvc: PlayersService, private route: ActivatedRoute, private router: Router) {
    this.data = {};
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = id;
      this.playersSvc.getById(id).subscribe(data => {
        this.data = data;
      })
    }
  }

}
