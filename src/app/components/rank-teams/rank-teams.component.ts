import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-rank-teams',
  templateUrl: './rank-teams.component.html',
  styleUrls: ['./rank-teams.component.scss'],
})
export class RankTeamsComponent implements OnInit {
  @Input() type: 'CUP' | 'LEAGUE' | undefined;

  @Input() teams: any;

  constructor(private router: Router, public loaderService: LoaderService) {}

  ngOnInit(): void {
    this.getGoalsDif();
  }
  goToTeam(id: number) {
    this.router.navigate(['/team/' + id]);
  }

  getGoalsDif() {
    this.teams?.map((team: any) => {
      team.goalDif = team.goalsFor - team.goalsAgainst;
    });
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
      case 'GDLabel':
        data = 'goalDif';
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
