import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  constructor() { }

  model = {name: "La liga", description: "Description"};
  cForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.cForm.value);
  }

}
