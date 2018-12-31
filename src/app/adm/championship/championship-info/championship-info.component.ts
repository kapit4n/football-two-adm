import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { ChampionshipsService } from '../../../services/adm/championships.service'

@Component({
  selector: 'app-championship-info',
  templateUrl: './championship-info.component.html',
  styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {

  id: string;
  data: any;
  constructor(private champSvc: ChampionshipsService, private route: ActivatedRoute, private router: Router) {
    this.data = {};
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = id;
      this.champSvc.getById(id).subscribe(data => {
        this.data = data;
      })
    }
  }

}
