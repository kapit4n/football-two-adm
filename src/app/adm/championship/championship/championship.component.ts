import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChampionshipsService } from '../../../services/adm/championships.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  id: string;
  constructor(private champSvc: ChampionshipsService, private route: ActivatedRoute, private router: Router) {
    this.cForm = new FormGroup({
      name: new FormControl(''),
      banner: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl('')
    });
  }

  cForm: FormGroup;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    
    if (id != 'new') {
      this.id = id;
      this.champSvc.getById(id).subscribe(data => {
        this.cForm.setValue({ name: data.name, description: data.description, startDate: moment(data.startDate).format('YYYY-MM-DD'), endDate: moment(data.endDate).format('YYYY-MM-DD'), banner: data.banner });
      })
    }

  }

  onSubmit() {
    let data = {};
    data = Object.assign({}, this.cForm.value);
    if (this.id) {
      data = Object.assign(data);
      this.champSvc.update(this.id, data).subscribe( data => {
        console.log(data);
        this.router.navigate(['/championship-info/' + this.id]);
      });
    } else {
      this.champSvc.save(data).subscribe(data => {
        this.router.navigate(['/championship-list']);
      });
    }
  }

}
