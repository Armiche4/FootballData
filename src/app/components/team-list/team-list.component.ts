import { Component, Input, OnInit } from '@angular/core';
import { TeamInt } from 'src/app/interfaces/teamInt';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  constructor(
    private service: MainServiceService,
    private error: ErrorHandlerService
  ) {}

  @Input() offset: string | undefined;

  teams: TeamInt[] = [];

  ngOnInit(): void {
    this.service.getAllTeams(this.offset).subscribe((teams) => {
      try {
        console.log(teams);
        this.teams = teams.teams;
      } catch {
        this.error.goToPageError(teams);
      }
    });
  }
}
