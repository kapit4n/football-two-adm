import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChampionshipComponent } from './adm/championship/championship/championship.component';

import { ChampionshipListComponent } from './adm/championship/championship-list/championship-list.component';
import { ChampionshipsService } from './services/adm/championships.service';
import { ChampionshipInfoComponent } from './adm/championship/championship-info/championship-info.component';
import { TeamEditComponent } from './adm/team/team-edit/team-edit.component';
import { TeamComponent } from './adm/team/team/team.component';
import { TeamListComponent } from './adm/team/team-list/team-list.component'

const appRoutes: Routes = [
  { path: 'championship/:id', component: ChampionshipComponent },
  { path: 'championship-info/:id', component: ChampionshipInfoComponent },
  { path: 'championship-list', component: ChampionshipListComponent },
  { path: 'team/:id', component: TeamEditComponent },
  { path: 'team-info/:id', component: TeamComponent },
  { path: 'team-list', component: TeamListComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ChampionshipComponent,
    ChampionshipListComponent,
    ChampionshipInfoComponent,
    TeamEditComponent,
    TeamComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ChampionshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
