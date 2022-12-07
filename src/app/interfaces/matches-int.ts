export interface MatchesInt {
  id: number;
  awayTeam: TeamMatchInt;
  homeTeam: TeamMatchInt;
  competition: TeamMatchInt;
  awayTeamGoals: number;
  homeTeamGoals: number;
  date: Date;
  status: 'SCHEDULED' | 'FINISHED' | 'TIMED';
  stage?: stageMatch | string;
}

export interface MatchesGlobalDataInt {
  competitions: string;
  count: number;
  draws: number;
  losses: number;
  wins: number;
}

export interface TeamMatchInt {
  id: string;
  crest: string;
  name: string;
}

export enum stageMatch {
  FINAL,
  THIRD_PLACE,
  SEMI_FINALS,
  QUARTER_FINALS,
  LAST_16,
  LAST_32,
  LAST_64,
  ROUND_4,
  ROUND_3,
  ROUND_2,
  ROUND_1,
  GROUP_STAGE,
  PRELIMINARY_ROUND,
  QUALIFICATION,
  QUALIFICATION_ROUND_1,
  QUALIFICATION_ROUND_2,
  QUALIFICATION_ROUND_3,
  PLAYOFF_ROUND_1,
  PLAYOFF_ROUND_2,
  PLAYOFFS,
  REGULAR_SEASON,
  CLAUSURA,
  APERTURA,
  CHAMPIONSHIP,
  RELEGATION,
  RELEGATION_ROUND,
}
