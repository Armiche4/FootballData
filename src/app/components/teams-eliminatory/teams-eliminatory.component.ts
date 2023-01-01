import { Component, OnInit, ViewChild } from '@angular/core';
import { MatchesInt, stageMatch } from 'src/app/interfaces/matches-int';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-teams-eliminatory',
  templateUrl: './teams-eliminatory.component.html',
  styleUrls: ['./teams-eliminatory.component.scss'],
})
export class TeamsEliminatoryComponent implements OnInit {
  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService,
    private mapper: MapperService
  ) {}

  @ViewChild('matches', { static: true })
  matchesComponent!: HTMLElement;

  stage = stageMatch;
  currentCompetition = 'WC';

  teams: any[] = [];

  matchesStaged: any[] = [];

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

    this.service
      .getEliminatoryMatches(this.currentCompetition)
      .subscribe((data) => {
        try {
          let matches: MatchesInt[] = [];
          this.matchesStaged = [];
          data.matches.map((match: any) => {
            if (match.stage !== 'GROUP_STAGE') {
              matches.push(match);
            }
          });

          matches = this.mapper.machesMapper(matches as []);

          this.matchesStaged.push(
            this.mapper.getMatchesFromStage(
              matches,
              'LAST_16',
              this.currentCompetition
            )
          );
          this.matchesStaged.push(
            this.mapper.getMatchesFromStage(
              matches,
              'QUARTER_FINALS',
              this.currentCompetition
            )
          );
          this.matchesStaged.push(
            this.mapper.getMatchesFromStage(
              matches,
              'SEMI_FINALS',
              this.currentCompetition
            )
          );
          this.matchesStaged.push(
            this.mapper.getMatchesFromStage(
              matches,
              'FINAL',
              this.currentCompetition
            )
          );
        } catch {
          this.error.goToPageError(data);
        }
      });
  }

  scroll(elem: string) {
    document
      ?.querySelector(elem)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
