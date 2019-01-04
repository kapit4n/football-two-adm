import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatchesService } from '../../../services/adm/matches.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {

  id: string;
  cForm: FormGroup;

  constructor(private matchesSvc: MatchesService, private route: ActivatedRoute, private router: Router) {
    this.cForm = new FormGroup({
      matchDate: new FormControl(''),
      visitId: new FormControl(''),
      localId: new FormControl('')
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != 'new') {
      this.id = id;
      this.matchesSvc.getById(id).subscribe(data => {
        this.cForm.setValue({ matchDate: data.matchDate, visitId: data.visitId, localId: data.localId });
      })
    }
  }

  onSubmit() {
    let data = {};
    data = Object.assign({}, this.cForm.value);
    if (this.id) {
      data = Object.assign(data);
      this.matchesSvc.update(this.id, data).subscribe(data => {
        this.router.navigate(['/match-info/' + this.id]);
      });
    } else {
      this.matchesSvc.save(data).subscribe(data => {
        this.router.navigate(['/match-list']);
      });
    }
  }
}

