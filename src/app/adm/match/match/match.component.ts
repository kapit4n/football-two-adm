import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { MatchesService } from '../../../services/adm/matches.service'
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  id: string;
  data: any;
  closeResult: string;
  goalTime = { hour: 0, min: 0, seg: 0 };

  constructor(private matchesSvc: MatchesService, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    this.data = {};
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = id;
      this.matchesSvc.getByIdIncl(id).subscribe(data => {
        this.data = data;
      })
    }
  }

  openGoalRegister(goalRegister) {
    this.modalService.open(goalRegister, { size: 'lg' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  registerGoal() {
    console.log(this.goalTime);
    let goalInfo = {
      "goalTime": 1000,
      "description": "From corner",
      "matchId": "5e27b68a66a0291e78d77ad9",
      "playerId": "5e27b56a66a0291e78d77ad3",
      "teamId": "5e27b53366a0291e78d77ad2"
    };
  }

}
