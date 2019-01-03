import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlayersService } from '../../../services/adm/players.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  id: string;
  cForm: FormGroup;

  constructor(private playersSvc: PlayersService, private route: ActivatedRoute, private router: Router) {
    this.cForm = new FormGroup({
      name: new FormControl(''),
      img: new FormControl(''),
      biography: new FormControl('')
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != 'new') {
      this.id = id;
      this.playersSvc.getById(id).subscribe(data => {
        this.cForm.setValue({ name: data.name, biography: data.biography, img: data.img });
      })
    }
  }

  onSubmit() {
    let data = {};
    data = Object.assign({}, this.cForm.value);
    if (this.id) {
      data = Object.assign(data);
      this.playersSvc.update(this.id, data).subscribe(data => {
        this.router.navigate(['/player-info/' + this.id]);
      });
    } else {
      this.playersSvc.save(data).subscribe(data => {
        this.router.navigate(['/player-list']);
      });
    }
  }
}
