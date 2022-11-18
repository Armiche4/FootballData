import { Component, Input, OnInit } from '@angular/core';
import {
  MatchesGlobalDataInt,
  MatchesInt,
} from 'src/app/interfaces/matches-int';
import { TeamInt } from 'src/app/interfaces/teamInt';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.scss'],
})
export class TeamMatchesComponent implements OnInit {
  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService,
    private mapper: MapperService
  ) {}
  @Input() team = {} as TeamInt;

  @Input() matcheStatus: 'SCHEDULED' | 'FINISHED' = 'FINISHED';

  matches: MatchesInt[] = [];

  globalData = {} as MatchesGlobalDataInt;

  //hacer filtro por temporada, resultado, visitante o casa, competicion
  ngOnInit(): void {
    this.service.getTeamMatches(this.team.id).subscribe((data) => {
      try {
        console.log(data);
        this.matches = this.mapper.machesMapper(
          data.matches,
          this.matcheStatus
        );

        if (this.matcheStatus === 'FINISHED') {
          this.matches = this.matches.reverse();
        }
        this.globalData = data.resultSet;
      } catch {
        this.error.goToPageError(data);
      }
    });
  }

  goTo(id: string): void {
    window.location.href = '/team/' + id;
  }
}
