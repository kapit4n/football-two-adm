import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChampionshipComponent } from './adm/championship/championship/championship.component';

import { ChampionshipListComponent } from './adm/championship/championship-list/championship-list.component';
import { ChampionshipsService } from './services/adm/championships.service'

const appRoutes: Routes = [
  { path: 'championship/:id', component: ChampionshipComponent },
  { path: 'championship-list', component: ChampionshipListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChampionshipComponent,
    ChampionshipListComponent
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
