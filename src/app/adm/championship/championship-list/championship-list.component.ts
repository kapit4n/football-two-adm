import { Component, OnInit } from '@angular/core';
import { ChampionshipsService } from '../../../services/adm/championships.service'

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css']
})
export class ChampionshipListComponent implements OnInit {

  championships: Array<any>;
  constructor(private champSvc: ChampionshipsService) {
    this.championships = [];
  }

  ngOnInit() {
    this.champSvc.getAll().subscribe(data => this.championships = data)
  }

}
