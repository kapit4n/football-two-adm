import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChampionshipsService } from '../../../services/adm/championships.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  constructor(private champSvc: ChampionshipsService, private route: ActivatedRoute) {
    this.cForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }
  
  cForm: FormGroup;
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != 'new') {
      this.champSvc.getById(id).subscribe(data => {
        this.cForm.setValue(data);
      })
    }

  }

  onSubmit() {
    this.champSvc.save(this.cForm.value).subscribe(data => console.log(data));
  }

}
