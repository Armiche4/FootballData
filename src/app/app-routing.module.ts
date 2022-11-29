import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorDefaultComponent } from './components/errorComponents/error-default/error-default.component';
import { Error403Component } from './components/errorComponents/error403/error403.component';
import { PlayersTopComponent } from './components/players-top/players-top.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamsEliminatoryComponent } from './components/teams-eliminatory/teams-eliminatory.component';

const routes: Routes = [
  { path: 'tables', component: TableTeamsComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: 'ErrorPage403', component: Error403Component },
  { path: 'ErrorPage', component: ErrorDefaultComponent },
  { path: 'eliminatories', component: TeamsEliminatoryComponent },
  { path: 'players', component: PlayersTopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
