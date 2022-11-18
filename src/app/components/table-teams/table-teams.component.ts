import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private error: ErrorHandlerService
  ) {}

  teams: any;

  competitions: any[] = [];

  currentCompetition = 'PD';

  seasons: number[] = [];

  currentSeason = new Date().getFullYear().toString();

  ngOnInit(): void {
    this.getTableData();

    this.getSeasons();

    this.service.getCompetitions().subscribe((data) => {
      data.competitions.map((comp: any) => {
        if (comp.type === 'LEAGUE') {
          this.competitions.push(comp);
        }
      });
    });
  }

  getSeasons() {
    for (let i = 2020; i <= parseInt(this.currentSeason); i++) {
      this.seasons.push(i);
    }
  }

  onSelected() {
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
          });
        } catch {
          this.error.goToPageError(data);
        }
      });
  }
  goToTeam(id: number) {
    this.router.navigate(['/team/' + id]);
  }

  onSortBy(event: any) {
    let reasonSorted = event.path[0].id;

    let data = '';
    switch (reasonSorted) {
      case 'winLabel':
        data = 'won';
        break;
      case 'lostLabel':
        data = 'lost';
        break;
      case 'drawLabel':
        data = 'draw';
        break;
      case 'GFLabel':
        data = 'goalsFor';
        break;
      case 'GALabel':
        data = 'goalsAgainst';
        break;
      case 'Pts':
        data = 'position';
        break;
    }

    let order = [1, -1];
    if (this.teams[0][data] < this.teams[this.teams.length - 1][data]) {
      order.sort();
    }

    this.teams.sort((a: any, b: any) => {
      if (a[data] > b[data]) {
        return order[0];
      }
      if (a[data] < b[data]) {
        return order[1];
      }
      return 0;
    });
  }
}
