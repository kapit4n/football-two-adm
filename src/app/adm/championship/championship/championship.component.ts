import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChampionshipsService } from '../../../services/adm/championships.service'

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  constructor(private champSvc: ChampionshipsService) {
    this.cForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
    this.champSvc.getById("1").subscribe(data => {
      this.cForm.setValue(data);
    })
  }

  cForm: FormGroup;

  ngOnInit() {

  }

  onSubmit() {
    this.champSvc.save(this.cForm.value).subscribe(data => console.log(data));
  }

}
