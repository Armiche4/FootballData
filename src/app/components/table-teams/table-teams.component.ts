import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from 'src/app/services/error-handler.service';

import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.scss'],
})
export class TableTeamsComponent implements OnInit {
  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService
  ) {}

  teams: any;

  competitions: any[] = [];

  currentCompetition = 'PD';

  currentSeason = (new Date().getFullYear() - 1).toString();

  ngOnInit(): void {
    this.getTableData();
  }

  getCompetitionData(competitionData: string[]) {
    this.currentCompetition = competitionData[0];
    this.currentSeason = competitionData[1];
    this.getTableData();
  }

  getTableData() {
    this.service
      .getTable(this.currentCompetition, this.currentSeason)
      .subscribe((data) => {
        try {
          this.teams = data.standings[0].table;
          this.teams.map((team: any) => {
            team.form = team.form.split(',');
            team.goalDif = team.goalsFor - team.goalsAgainst;
          });
        } catch {
          this.error.goToPageError(data);
        }
      });
  }
}
