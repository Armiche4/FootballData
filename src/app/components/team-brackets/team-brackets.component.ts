import { Component, Input, OnInit } from '@angular/core';
import { MatchesInt, stageMatch } from 'src/app/interfaces/matches-int';

@Component({
  selector: 'app-team-brackets',
  templateUrl: './team-brackets.component.html',
  styleUrls: ['./team-brackets.component.scss'],
})
export class TeamBracketsComponent implements OnInit {
  @Input() matches: any;

  constructor() {}

  ngOnInit(): void {}
}
