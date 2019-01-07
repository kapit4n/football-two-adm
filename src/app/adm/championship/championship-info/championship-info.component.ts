import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import * as moment from 'moment';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ChampionshipsService } from '../../../services/adm/championships.service'
import { TeamsService } from '../../../services/adm/teams.service'

@Component({
  selector: 'app-championship-info',
  templateUrl: './championship-info.component.html',
  styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {
  id: string;
  data: any;
  startDateLabel = "";
  endDateLabel = "";
  moment = moment;
  closeResult: string;
  availableTeams: Array<any>;

  constructor(private champSvc: ChampionshipsService, private route: ActivatedRoute,
    private router: Router, private modalService: NgbModal, private teamsSvc: TeamsService, ) {
    this.data = {};
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = id;
      this.champSvc.getByIdIncl(id).subscribe(data => {
        this.data = data;
        if (new Date(this.data.startDate).getTime() > Date.now()) {
          this.startDateLabel = "Start";
        } else {
          this.startDateLabel = "Started";
        }

        if (new Date(this.data.endDate).getTime() > Date.now()) {
          this.endDateLabel = "End";
        } else {
          this.endDateLabel = "Ended";
        }

      })

      this.teamsSvc.getAll().subscribe(data => this.availableTeams = data);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then(
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

  private addTeam(team: any) {
    
    console.log(this.data);
    let data = {teamId: team.id, championshipId: this.id};
    this.champSvc.addTeam(data).subscribe(dataSvd => {
      console.log(dataSvd);
      console.log("Saved team");
    });
  }

  private removeTeam(team: any) {

  }

}
