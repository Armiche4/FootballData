import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { TeamInt } from 'src/app/interfaces/teamInt';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
})
export class TeamDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: MainServiceService,
    private mapper: MapperService,
    private error: ErrorHandlerService
  ) {}

  team = {} as TeamInt;

  teamId = '';

  teamColors: string[] = [];

  isMachtesVisible: boolean = false;
  ispreVisible: boolean = false;
  ispostVisible: boolean = false;

  tabIndex = 0;

  matcheStatus: 'SCHEDULED' | 'FINISHED' = 'FINISHED';

  refreshStatus = new Subject<'SCHEDULED' | 'FINISHED'>();

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = params['id'];
      this.service.getTeam(params['id']).subscribe((team) => {
        console.log(team);
        try {
          this.team = this.mapper.teammapper(team);
          this.getColorsTeam(this.team.clubColors);
        } catch {
          this.error.goToPageError(team);
        }
      });
    });
  }

  getColorsTeam(colors: string): void {
    this.teamColors = colors.split(' / ');
  }

  switchCategory(index: number): void {
    this.tabIndex = index;
    if (index === 0) {
      this.isMachtesVisible = false;
      this.ispostVisible = false;
      this.ispreVisible = false;
    } else {
      this.isMachtesVisible = true;
      if (index === 2) {
        this.ispostVisible = true;
        this.ispreVisible = false;
      } else {
        this.ispostVisible = false;
        this.ispreVisible = true;
      }
    }
  }
}
