import { Component, Input, OnInit } from '@angular/core';
import { MatchesInt, TeamMatchInt } from 'src/app/interfaces/matches-int';

@Component({
  selector: 'app-team-brackets-match',
  templateUrl: './team-brackets-match.component.html',
  styleUrls: ['./team-brackets-match.component.scss'],
})
export class TeamBracketsMatchComponent implements OnInit {
  //@Input() match: MatchesInt = {} as MatchesInt;
  @Input() match: any;
  constructor() {}

  ngOnInit(): void {}

  goTo(id: string | undefined) {
    if (id != undefined) {
      window.location.href = '/team/' + id;
    }
  }
}
