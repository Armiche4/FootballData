import { Injectable } from '@angular/core';
import { MatchesInt, stageMatch } from '../interfaces/matches-int';
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
    matchSatus?: 'SCHEDULED' | 'FINISHED'
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
          stage: match?.stage,
          id: match?.id ? match?.id : undefined,
        } as MatchesInt;
      })
      .filter((match) => {
        if (matchSatus != undefined) {
          return match.status === matchSatus;
        } else {
          return match;
        }
      });
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

  getMatchesFromStage(
    matches: MatchesInt[],
    stage: stageMatch | string,
    competition: string
  ): any[] {
    if (competition !== 'WC' && stage !== 'FINAL') {
      return this.getDoubleMatches(
        matches.filter((match) => match.stage == stage)
      );
    } else {
      return matches.filter((match) => match.stage == stage);
    }
  }

  getDoubleMatches(matches: MatchesInt[]) {
    let matchesDoubleResult = [];

    for (let i = 0; i < matches.length; i++) {
      for (let j = i + 1; j < matches.length; j++) {
        if (matches[i].awayTeam.id === matches[j].homeTeam.id) {
          let twoMatchesEliminatory = [];
          twoMatchesEliminatory.push(matches[i]);
          twoMatchesEliminatory.push(matches[j]);
          matchesDoubleResult.push(twoMatchesEliminatory);
        }
      }
    }
    return matchesDoubleResult;
  }
}
