import { PlayerInt } from './playerInt';

export interface TeamInt {
  id: string;
  country?: string;
  crest: string;
  name: string;
  founded: string;
  stadium?: string;
  clubColors: string;
  squad?: PlayerInt[];
  coach?: string;
}
