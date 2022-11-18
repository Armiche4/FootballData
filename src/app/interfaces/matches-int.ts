export interface MatchesInt {
  id: number;
  awayTeam: TeamMatchInt;
  homeTeam: TeamMatchInt;
  competition: TeamMatchInt;
  awayTeamGoals: number;
  homeTeamGoals: number;
  date: Date;
  status: 'SCHEDULED' | 'FINISHED';
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
