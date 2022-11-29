import { Injectable } from '@angular/core';
import { MatchesInt } from '../interfaces/matches-int';
import { PlayerInt, ScorersInt } from '../interfaces/playerInt';
import { TeamInt } from '../interfaces/teamInt';
import { getAge } from '../utils/time.utils';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  constructor() {}

  teammapper(rawDataTeam: any): TeamInt {
    return {
      id: rawDataTeam.id,
      country: rawDataTeam.area.flag,
      crest: rawDataTeam.crest,
      name: rawDataTeam.name,
      founded: rawDataTeam.founded,
      stadium: rawDataTeam.venue,
      clubColors: rawDataTeam.clubColors,
      squad: this.squadTeammapper(rawDataTeam.squad),
      coach: rawDataTeam.coach.name,
    } as TeamInt;
  }

  squadTeammapper(rawDataSquad: []): PlayerInt[] {
    return rawDataSquad.map((player: any) => {
      return {
        id: player.id,
        name: player.name,
        position: player.position,
        years: getAge(player.dateOfBirth),
        dateOfBirth: player.dateOfBirth,
        nationality: player.nationality,
      } as PlayerInt;
    });
  }

  machesMapper(
    rawDataMatches: [],
    matchSatus: 'SCHEDULED' | 'FINISHED'
  ): MatchesInt[] {
    return rawDataMatches
      .map((match: any) => {
        return {
          awayTeam: {
            id: match.awayTeam.id,
            name: match.awayTeam.name,
            crest: match.awayTeam.crest,
          },
          homeTeam: {
            id: match.homeTeam.id,
            name: match.homeTeam.name,
            crest: match.homeTeam.crest,
          },
          competition: {
            id: match.competition.id,
            name: match.competition.name,
            crest: match.competition.emblem,
          },
          awayTeamGoals: match.score.fullTime.away,
          homeTeamGoals: match.score.fullTime.home,
          date: new Date(match.utcDate),
          status: match.status,
        } as MatchesInt;
      })
      .filter((match) => match.status === matchSatus);
  }

  scorersMapper(rawDataScorers: []): ScorersInt[] {
    return rawDataScorers.map((player: any) => {
      return {
        player: player.player,
        goals: player.goals,
        assists: player.assists,
        penanlties: player.penanlties,
        team: player.team,
      };
    });
  }
}
