import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChampionshipsService } from './services/adm/championships.service';
import { TeamsService } from './services/adm/teams.service';
import { PlayersService } from './services/adm/players.service';
import { MatchesService } from './services/adm/matches.service';

import { ChampionshipComponent } from './adm/championship/championship/championship.component';
import { ChampionshipListComponent } from './adm/championship/championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './adm/championship/championship-info/championship-info.component';
import { TeamEditComponent } from './adm/team/team-edit/team-edit.component';
import { TeamComponent } from './adm/team/team/team.component';
import { TeamListComponent } from './adm/team/team-list/team-list.component';
import { PlayerComponent } from './adm/player/player/player.component';
import { PlayerEditComponent } from './adm/player/player-edit/player-edit.component';
import { PlayerListComponent } from './adm/player/player-list/player-list.component';
import { MatchComponent } from './adm/match/match/match.component';
import { MatchEditComponent } from './adm/match/match-edit/match-edit.component';
import { MatchListComponent } from './adm/match/match-list/match-list.component'

const appRoutes: Routes = [
  { path: 'championship/:id', component: ChampionshipComponent },
  { path: 'championship-info/:id', component: ChampionshipInfoComponent },
  { path: 'championship-list', component: ChampionshipListComponent },
  { path: 'team/:id', component: TeamEditComponent },
  { path: 'team-info/:id', component: TeamComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'player/:id', component: PlayerEditComponent },
  { path: 'player-info/:id', component: PlayerComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'match/:id', component: MatchEditComponent },
  { path: 'match-info/:id', component: MatchComponent },
  { path: 'match-list', component: MatchListComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ChampionshipComponent,
    ChampionshipListComponent,
    ChampionshipInfoComponent,
    TeamEditComponent,
    TeamComponent,
    TeamListComponent,
    PlayerComponent,
    PlayerEditComponent,
    PlayerListComponent,
    MatchComponent,
    MatchEditComponent,
    MatchListComponent
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
  providers: [ChampionshipsService, TeamsService, PlayersService, MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
