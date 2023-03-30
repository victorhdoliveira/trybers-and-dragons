import IEnergy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: IEnergy;

  special?(enemy: Fighter): void
  levelUp(): void
}
