import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScorersInt } from 'src/app/interfaces/playerInt';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-players-top',
  templateUrl: './players-top.component.html',
  styleUrls: ['./players-top.component.scss'],
})
export class PlayersTopComponent implements OnInit {
  currentCompetition = 'PD';

  currentSeason = new Date().getFullYear().toString();

  players: ScorersInt[] = [];

  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService,
    private mapper: MapperService,
    private router: Router
  ) {}

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
      .getTopScorers(this.currentCompetition, this.currentSeason)
      .subscribe((data) => {
        try {
          this.players = this.mapper.scorersMapper(data.scorers);

          console.log(this.players);
        } catch {
          this.error.goToPageError(data);
        }
      });
  }

  goToTeam(id: string) {
    this.router.navigate(['/team/' + id]);
  }
}
