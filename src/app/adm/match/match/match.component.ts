import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { MatchesService } from '../../../services/adm/matches.service'

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  id: string;
  data: any;
  constructor(private matchesSvc: MatchesService, private route: ActivatedRoute, private router: Router) {
    this.data = {};
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = id;
      this.matchesSvc.getById(id).subscribe(data => {
        this.data = data;
      })
    }
  }
}
