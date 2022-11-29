import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-teams-eliminatory',
  templateUrl: './teams-eliminatory.component.html',
  styleUrls: ['./teams-eliminatory.component.scss'],
})
export class TeamsEliminatoryComponent implements OnInit {
  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService
  ) {}

  currentCompetition = 'WC';

  teams: any[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getCompetitionData(competitionData: string[]) {
    this.currentCompetition = competitionData[0];
    this.getTableData();
  }

  getTableData() {
    this.service.getEliminatory(this.currentCompetition).subscribe((data) => {
      try {
        this.teams = [];
        data.standings.map((team: any) => {
          team.goalDif = team.goalsFor - team.goalsAgainst;
          this.teams.push(team.table);
        });
      } catch {
        this.error.goToPageError(data);
      }
    });
  }
}
