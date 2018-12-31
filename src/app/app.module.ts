import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ChampionshipComponent } from './adm/championship/championship/championship.component';

import { ChampionshipListComponent } from './adm/championship/championship-list/championship-list.component';

const appRoutes: Routes = [
  { path: 'championship', component: ChampionshipComponent },
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
