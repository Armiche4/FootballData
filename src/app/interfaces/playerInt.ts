import { TeamInt } from './teamInt';

export interface PlayerInt {
  id: string;
  name: string;
  position: string;
  years: number;
  dateOfBirth: string;
  nationality: string;
}

export interface ScorersInt {
  player: PlayerInt;
  goals: number;
  assists: number;
  penanlties: number;
  team: TeamInt;
}
