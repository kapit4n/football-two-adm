import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamsService } from '../../../services/adm/teams.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  id: string;
  cForm: FormGroup;

  constructor(private teamsSvc: TeamsService, private route: ActivatedRoute, private router: Router) {
    this.cForm = new FormGroup({
      name: new FormControl(''),
      banner: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != 'new') {
      this.id = id;
      this.teamsSvc.getById(id).subscribe(data => {
        this.cForm.setValue({ name: data.name, description: data.description, banner: data.banner });
      })
    }
  }

  onSubmit() {
    let data = {};
    data = Object.assign({}, this.cForm.value);
    if (this.id) {
      data = Object.assign(data);
      this.teamsSvc.update(this.id, data).subscribe(data => {
        this.router.navigate(['/team-info/' + this.id]);
      });
    } else {
      this.teamsSvc.save(data).subscribe(data => {
        this.router.navigate(['/team-list']);
      });
    }
  }
}
